import Swal from "sweetalert2";

export function useDelete() {

       const alertHandler = (okCallback = null) => {
              const titleNode = `<p class="font-main text-2xl text-red-500">ایا از حذف اطمینان دارید؟</p>`;
              const bodyNode = `<p class="font-main text-base text-neutral-500 border-neutral-300" dir="rtl">فرایند غیر قابل بازگشت خواهد بود!</p>`;
              // actions in swal ordered => "didRender" | "willOpen" | "didOpen" | "willClose" | "didClose" | "didDestroy"
              Swal.fire({
                     title: titleNode,
                     html: bodyNode,
                     icon: "error",
                     showCancelButton: true,
                     cancelButtonText: "نه، باید فکر کنم",
                     confirmButtonText: "بله ، مطمعنم",
                     customClass: {
                            cancelButton: "text-red-500! border! bg-transparent! font-main",
                            confirmButton: "text-green-500! border! bg-transparent! font-main",
                     }
              }).then(e => {
                     if (okCallback) okCallback(e)
              })

       }

       return alertHandler
}
