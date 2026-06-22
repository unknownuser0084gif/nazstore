

export default function Logo({ scale = 1, className = "" }) {
       return (
              <>
                     <a href="/" style={{ scale: scale }} className={`flex justify-center items-center w-fit h-fit font-main-bold gap-x-1 text-2xl ${className}`} dir="rtl">
                            <p className="text-text_secondary">ناز</p>
                            <p className="text-text_primary">استور</p>
                     </a>
              </>
       )
}
