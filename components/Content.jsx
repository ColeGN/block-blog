import { Chip } from "./little things/chip"

export function Content(){
    return <div className="flex flex-col items-start gap-8 ">
        <div>
            <p className="text-2xl font-bold">Trending</p>
        </div>
        <div className="flex items-start gap-5 flex-1 w-full border border-slate-800 whitespace-nowrap" >
            <div className="h-72 ">
                <img className="inline-block h-72 relative" src="https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgqSGtIXQ7yRG4uKOvZPz6V9IGTLF-tRcsjBgyFTw0E8SJdcCQrLT3LSfDKzWdtHzDVzZJdMzANRqwjkTUtekRFXZfl8MmCIk05rFrhKWcSqUC1Wj~h8YjxKErPNcqc~s0I6TuisFBaoFOzMVS-2d8b1-F3tJwwTFP6nS17vjmsrtFLxW4pupdWj5VAhdoY903Mz4RcyEzIbDWxU6-u-1rFPd9nvzWzso~NgIm5xQ00lfanW7uGYU~9YinB4wPH9HP9Pm0Jdkdl9He~yrl1d5ZcxCdwLZNoXlmaxSUvm6Z4tqUDw68y3fAOEnDSBV~J5VFncEocAaDmHVwHKLmW6NA__" height={289}/>
                {/* <div className="flex flex-col gap-4 items-start absolute bottom-7">
                    <div>
                        <Chip/>
                    </div>
                    <div className="inline flex-1 flex-col w-56">
                        <p className="inline text-lg font-semibold text-white">The Impact of Technology <br/> on the Workplace: How <br/> Technology is Changing</p>
                    </div>
                </div> */}
            </div>
            <div>
                <img className="inline-block h-72" src="https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgqSGtIXQ7yRG4uKOvZPz6V9IGTLF-tRcsjBgyFTw0E8SJdcCQrLT3LSfDKzWdtHzDVzZJdMzANRqwjkTUtekRFXZfl8MmCIk05rFrhKWcSqUC1Wj~h8YjxKErPNcqc~s0I6TuisFBaoFOzMVS-2d8b1-F3tJwwTFP6nS17vjmsrtFLxW4pupdWj5VAhdoY903Mz4RcyEzIbDWxU6-u-1rFPd9nvzWzso~NgIm5xQ00lfanW7uGYU~9YinB4wPH9HP9Pm0Jdkdl9He~yrl1d5ZcxCdwLZNoXlmaxSUvm6Z4tqUDw68y3fAOEnDSBV~J5VFncEocAaDmHVwHKLmW6NA__" height={289}/>
            </div>
            <div>
                <img className="inline-block h-72" src="https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgqSGtIXQ7yRG4uKOvZPz6V9IGTLF-tRcsjBgyFTw0E8SJdcCQrLT3LSfDKzWdtHzDVzZJdMzANRqwjkTUtekRFXZfl8MmCIk05rFrhKWcSqUC1Wj~h8YjxKErPNcqc~s0I6TuisFBaoFOzMVS-2d8b1-F3tJwwTFP6nS17vjmsrtFLxW4pupdWj5VAhdoY903Mz4RcyEzIbDWxU6-u-1rFPd9nvzWzso~NgIm5xQ00lfanW7uGYU~9YinB4wPH9HP9Pm0Jdkdl9He~yrl1d5ZcxCdwLZNoXlmaxSUvm6Z4tqUDw68y3fAOEnDSBV~J5VFncEocAaDmHVwHKLmW6NA__"/>
            </div>
            <div>
                <img className="inline-block h-72" src="https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgqSGtIXQ7yRG4uKOvZPz6V9IGTLF-tRcsjBgyFTw0E8SJdcCQrLT3LSfDKzWdtHzDVzZJdMzANRqwjkTUtekRFXZfl8MmCIk05rFrhKWcSqUC1Wj~h8YjxKErPNcqc~s0I6TuisFBaoFOzMVS-2d8b1-F3tJwwTFP6nS17vjmsrtFLxW4pupdWj5VAhdoY903Mz4RcyEzIbDWxU6-u-1rFPd9nvzWzso~NgIm5xQ00lfanW7uGYU~9YinB4wPH9HP9Pm0Jdkdl9He~yrl1d5ZcxCdwLZNoXlmaxSUvm6Z4tqUDw68y3fAOEnDSBV~J5VFncEocAaDmHVwHKLmW6NA__"/>
            </div>
            
            
        </div>
    </div>  
}