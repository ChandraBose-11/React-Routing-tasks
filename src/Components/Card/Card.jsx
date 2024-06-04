import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((element, index) => {
              return (
                <div key={element.id}>
                  <div className="card col " style={{ width: "16rem" }}>
                    <img
                      src={element.Image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-content">
                        <b>{element.title}</b>
                      </p>
                      <p className="card-author mt-2 mb-0">
                        <span id="by">
                          <b>By</b>
                        </span>
                        &nbsp;<b>{element.author}</b>
                      </p>
                      <div
                        id="card-footer"
                        className="mt-2 d-flex flex-row flex-nowrap justify-content-between"
                      >
                        <p className="mb-0 card-text">{element.Postdate}</p>
                        <p className="mb-0 card-text">{element.Connect}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
