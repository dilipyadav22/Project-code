import "../style.css"

const Header =()=>{
    return(
        <div className="head" >
            <div className="head1" >
                <img  src="https://png.pngtree.com/background/20210714/original/pngtree-modern-black-friday-sale-banner-design-picture-image_1249680.jpg" alt="photo" />
            </div>
            <div className="head2" >
                <div className="head2-part1" >
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/location-pin-559-980707.png?f=webp&w=256" />
                    {/* <h4>Enter Your PinCode</h4> */}
                </div>
                <div className="details" >
                    <h3>Enter Your Pincode To check  </h3>
                    <h4>availability and faster delivery options </h4>
                    <label for="pincode" > Enter Your Pin-Code:
                        <input type="number" id="pincode" placeholder="Enter Pin-Code"  />
                    </label>
                    <button className="submit" > Submit </button>
                    <button className="next" > Next </button>
                </div>

            </div>
        </div>
    )
}

export default Header;