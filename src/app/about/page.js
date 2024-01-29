export default function About(){
    
    return(
        <>
       <div className="p-4 flex flex-col gap-4">
    <div className="flex flex-col md:flex-row max-w-3x1 max-auto space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-shrink-0 -mb-6 mt-4 z-20">
            <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1
            </div>
        </div>
        <div className="flex-1">
            <div className="bg-gray-200 rounded-lg px-4 py-2">
                <h3 className="font-medium text-lg">HISTORY</h3>
                <p className="mt-2">Soju is one of the most popularly consumed alcoholic beverages in Korea. 
                <br />
                Historically, it is said to have been derived from yellow wine, a Chinese distilled liquor.
                <br /> 
                Soju has existed in Korea since the Goryeo Dynasty, and became an everyday drink during the Joseon Dynasty.
                 However, until the early 20th century,
                 <br /> 
                 home brewing was common at home, and commercially produced soju was not popular.
                 <br />
                  However, as commercial soju production became more active after the 1960s, a period of rapid economic growth, soju became an everyday drink in Korean society.</p>
            </div>
        </div>
    </div>

    <div className="flex flex-col md:flex-row max-w-sm space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-shrink-0 -mb-6 mt-4 z-20">
            <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2
            </div>
        </div>
        <div className="flex-1">
            <div className="bg-gray-200 rounded-lg px-4 py-2">
                <h3 className="font-medium text-lg">HOW TO DRINK?</h3>               
                 <p className="mt-2">Soju is usually best enjoyed when drunk pure. To drink pure soju, follow these steps:

1.Pour the amount of soju you want to drink into a cup.

2. Pour soju into a small cup and gently rotate it to fill it with soju.

3. We recommend drinking it in small portions rather than drinking it all at once. This will allow you to further enjoy the taste and aroma of soju.</p>
            </div>
        </div>
    </div>

    <div className="flex flex-col md:flex-row max-w-sm space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-shrink-0 -mb-6 mt-4 z-20">
            <div className="h-10 w-10 bg-green-500  rounded-full flex items-center justify-center text-white font-bold">3
            </div>
        </div>
        <div className="flex-1">
            <div className="bg-gray-200 rounded-lg px-4 py-2">
                <h3 className="font-medium text-lg">USUALLY</h3>
                <p className="mt-2">Soju is usually enjoyed with food at home, and matching soju with snacks is important. Traditional Korean side dishes such as kimchi, sundae, seafood and green onion pancakes, and tteokbokki go well with soju. 
                    Also, it is good to drink soju with fatty foods. Oily foods can enhance the taste and aroma of soju..</p>
            </div>
        </div>
    </div>
</div>

                 <h3 className="text-3xl font-bold mb-2">
                     Enjoy soju even more with the right combination!</h3>
                     </>
    )
}