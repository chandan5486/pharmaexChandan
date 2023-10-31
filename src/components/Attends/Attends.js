import React from "react";
import Image from "next/image";
export const Attends = () => {
  return (
    <section className="attendsSec">
      <div className="container">
        <h4><small>Exhibitors</small>Who Attends?</h4>
        <div className="row">
          <ul className="attendList">
            <li>
              <div className="contentBox">
                <div className="iconBox">
                  <Image 
                  src={"/images/attend-01.svg"} 
                  width={"100"}
                  height={"100"}
                  alt="icon image"
                  />
                </div>
                <div className="contentBox">
                  <div className="title">Pharma Manufacturers</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. At nibh duis
                    maecenas tristique. Velit enim velit tellus in commodo magna
                    vulputate.{" "}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="contentBox">
                <div className="iconBox">
                  <Image 
                  src={"/images/attend-02.svg"} 
                  width={"100"}
                  height={"100"}
                  alt="icon image"
                  />
                </div>
                <div className="contentBox">
                  <div className="title">Suppliers/distributors</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. At nibh duis
                    maecenas tristique. Velit enim velit tellus in commodo magna
                    vulputate.{" "}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="contentBox">
                <div className="iconBox">
                  <Image 
                  src={"/images/attend-03.svg"} 
                  width={"100"}
                  height={"100"}
                  alt="icon image"
                  />
                </div>
                <div className="contentBox">
                  <div className="title">Finished Drug Product</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. At nibh duis
                    maecenas tristique. Velit enim velit tellus in commodo magna
                    vulputate.{" "}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="contentBox">
                <div className="iconBox">
                  <Image 
                  src={"/images/attend-04.svg"} 
                  width={"100"}
                  height={"100"}
                  alt="icon image"
                  />
                </div>
                <div className="contentBox">
                  <div className="title">PCD/Franchise</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. At nibh duis
                    maecenas tristique. Velit enim velit tellus in commodo magna
                    vulputate.{" "}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="contentBox">
                <div className="iconBox">
                  <Image 
                  src={"/images/attend-05.svg"} 
                  width={"100"}
                  height={"100"}
                  alt="icon image"
                  />
                </div>
                <div className="contentBox">
                  <div className="title">Packaging</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. At nibh duis
                    maecenas tristique. Velit enim velit tellus in commodo magna
                    vulputate.{" "}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="contentBox">
                <div className="iconBox">
                  <Image 
                  src={"/images/attend-06.svg"} 
                  width={"100"}
                  height={"100"}
                  alt="icon image"
                  />
                </div>
                <div className="contentBox">
                  <div className="title">Machinery</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. At nibh duis
                    maecenas tristique. Velit enim velit tellus in commodo magna
                    vulputate.{" "}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
