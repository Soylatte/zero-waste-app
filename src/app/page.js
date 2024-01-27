
export default function Home() {
  return (
    <div className="font-sans">
            <h1 className="header">The world's favourite zero waste company</h1>
            <p className="h-text">GIGU successfully Establishes The Zero-Waste System
            <br/>
             for the First Time in the World,
                a Clue to Solve the Problem With Plastic Waste.
            </p>
            <br/ >
            <br />
            <br />
            <div>오늘의 인기 챌린지</div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 sm:w-1/2 lg:w-1/3">
            <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">스타벅스에서 400원 할인가능해요!</h2>
            <p className="text-gray-700 text-base">텀블러 챙기셨나요?</p>
            <img className="w-full" src="/tumbler.png" alt="tumbler"/>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">도전하기!</button>
            <h2 className="font-bold text-xl mb-2">안입는 옷을 팔아요!</h2>
            <p className="text-gray-700 text-base">당근하러 오셨나요?</p>
            <img className="w-full" src="/carot.png" alt="carot"/>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">도전하기!</button>
            </div>
            </div>
            </div>
  );
}
