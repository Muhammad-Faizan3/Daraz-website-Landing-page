function Footer() {
    return (
        <footer className=" text-sm text-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

                <div>
                    <h3 className="font-semibold mb-3">Customer Care</h3>
                    <ul className="space-y-1 cursor-pointer">
                        <li>Help Center</li>
                        <li>How to Buy</li>
                        <li>Corporate & Bulk Purchasing</li>
                        <li>Returns & Refunds</li>
                        <li>Daraz Shop</li>
                        <li>Contact Us</li>
                        <li>Purchase Protection</li>
                        <li>Daraz Pick up Points</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Daraz</h3>
                    <ul className="space-y-1  cursor-pointer">
                        <li>About Us</li>
                        <li>Digital Payments</li>
                        <li>Daraz Donates</li>
                        <li>Daraz Blog</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Online Shopping App</li>
                        <li>Online Grocery Shopping</li>
                        <li>Daraz Exclusive</li>
                        <li>Daraz University</li>
                        <li>Sell on Daraz</li>
                        <li>Join Affiliate Program</li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center cursor-pointer ">
                            <img src="https://img.lazcdn.com/us/domino/e07f9602-da7e-4d31-9c4f-df69a2e95325_PK-60-60.png" alt="" />
                        </div>
                        <div>
                            <p className="text-orange-600 font-semibold">Happy Shopping</p>
                            <p className="text-gray-500">Download App</p>
                        </div>
                    </div>

                    <div className="flex gap-3 flex-wrap">
                        <img
                            src="	https://img.lazcdn.com/us/domino/2db6633b-c83c-48b7-9f7d-1262ee87cc80_PK-126-42.png"
                            alt="App Store"
                            className="h-10 cursor-pointer"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play "
                            className="h-10 cursor-pointer"
                        />
                        <img
                            src="	https://img.lazcdn.com/us/domino/7d216fe8-1bac-4ac9-81d3-072a9fbf32fc_PK-126-42.png"
                            alt="App Gallery"
                            className="h-10 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <h3 className="font-semibold mb-3">Payment Methods</h3>
                        <div className="flex flex-wrap gap-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="h-10 cursor-pointer" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-10 cursor-pointer" />
                            <img src="	https://img.lazcdn.com/us/domino/dd8e0447-8052-44f3-8ab2-b24c56a2491f_PK-139-84.png" className="h-10 cursor-pointer" />
                            <img src="	https://img.lazcdn.com/us/domino/e5c3cd93-b796-410f-9bfd-fbfdaa055149_PK-144-84.png" className="h-10 cursor-pointer" />
                            <img src="	https://img.lazcdn.com/us/domino/56915ba8-b2c0-4caf-b3a1-7e0f3d2d45cf_PK-139-84.png" className="h-10 cursor-pointer" />

                        </div>
                        <div className="flex flex-wrap gap-3 mt-1.5">
                            <img src="	https://img.lazcdn.com/us/domino/75489476-3c86-44ed-bf81-8b0579d56e1c_PK-139-84.png" className="h-10 cursor-pointer" />
                            <img src="		https://img.lazcdn.com/us/domino/6668ff96-bf9a-40bd-8ce4-f7f7c0bee385_PK-144-84.png" className="h-10 cursor-pointer" />
                            <img src="	https://img.lazcdn.com/us/domino/7237a412-04cc-4571-a200-44f6f847a9da_PK-144-84.png" className="h-10 cursor-pointer" />
                        </div>

                    </div>

    
                    <div>
                        <h3 className="font-semibold mb-3">Verified by</h3>
                        <img
                            src="	https://img.drz.lazcdn.com/g/tps/imgextra/i4/O1CN01ZaMORP1I3qlBom0V2_!!6000000000838-2-tps-73-41.png "
                            alt="PCI DSS"
                            className="h-12 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

                        

        
        </footer>
    );
}

export default Footer;