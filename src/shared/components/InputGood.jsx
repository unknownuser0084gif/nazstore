import { useState } from "react"

export default function InputGood({ defaultValue = "", inputType = "text", inputName = null, label, Icon, className = null }) {

       const [position, setPosition] = useState(defaultValue)

       return (
              <div className={"w-full mt-8 relative " + className}>
                     <input type={inputType} defaultValue={defaultValue} className="input-control-2 mt-2 peer ps-12! shadow" name={inputName} onBlur={e => setPosition(e.target.value)} />
                     <label className={`text-lg ${position !== "" ? "-top-2 opacity-100 right-0!" : "top-[55%]"} peer-focus:-top-2 peer-focus:right-0 peer-focus:opacity-100 pointer-events-none absolute -translate-y-1/2 right-12 opacity-70 transition-all`}>{label}</label>
                     <Icon className="absolute top-[55%] size-6 -translate-y-1/2 right-4 text-text_secondary" />
              </div>
       )
}
