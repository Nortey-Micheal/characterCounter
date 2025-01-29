import { ChangeEvent, useState } from "react"

export function Counter() {
    const [count,setCount] = useState(0);

    const countMessage = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.target.value;
        setCount(message.length)
    }

    return (
        <section className="w-full flex flex-col gap-14 items-center">
            <p className="text-2xl">Number of Characters : {count}</p>
            <textarea className="w-2xl border-2 border-cyan-400" onChange={countMessage} name="message" id="message"></textarea>
        </section>
    )
}