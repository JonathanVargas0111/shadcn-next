'use client'
export default function UserItem () {
    return (
        <div className="flex item justify-center gap-2 border rounded-[8px] p-4"> 
            <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700]
                            flex items-center justify-center">
                <p>FV</p>
            </div>
        <div className="grow">
             <p className="text-[16px] font-bold">Felipe Vargas</p>
             <p className="text-[12px] text-neutral-500">felipevargas@devfelipe.com</p>
        </div>
        </div>
    )
} 