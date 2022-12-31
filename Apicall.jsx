import React, {useState, useEffect} from "react";
import axios from "axios";

const Apicall = () => {
    const [data, setData]= useState([]);

    const getProduct = async () => {
        const result = await axios.get("https://fakestoreapi.com/products")
           setData(result.data)
    };
        useEffect(()=>{
            getProduct();
        }, []);
        return(
            <div>
                {data.map((item)=>{
                    return (
                      <div  style={{ backgroundColor: "green"}}>
                        <table border="5">
                          {" "}
                          <ul>
                            <li>
                              {" "}
                              <h1>{item.id}</h1>
                            </li>{" "}
                            <h1>{item.title}</h1>
                            <li>
                              {" "}
                              <h1>{item.description}</h1>
                            </li>
                            <li>
                              {" "}
                              <h2>{item.price}</h2>
                            </li>
                            <li>
                              <th>
                                <img
                                  src={item.image}
                                  alt=""
                                  height="250px"
                                  width="250px"
                                />
                              </th>
                            </li>
                          </ul>
                        </table>
                      </div>
                    );
                })}
            </div>
        )
    }
export default Apicall;