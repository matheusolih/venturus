import "./home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import React from "react";

export function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <section>
          <div className="card-geral">
            <div className="card local-card">
              <div className="card-body">
                <h5 className="card-title">My teams</h5>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card-geral">
            <div className="card local-card">
              <div className="card-body">
                <h5 className="card-title">Top 5</h5>
                <section>
                  <div>
                    <span className="card-title">Higest avg age</span>
                    <input type="text" class="form-control" value="exemplo" />
                    <input type="text" class="form-control" value="exemplo" />
                    <input type="text" class="form-control" value="exemplo" />
                  </div>
                  <div>
                    <span className="card-title">Higest avg age</span>
                    <input type="text" class="form-control" value="exemplo" />
                    <input type="text" class="form-control" value="exemplo" />
                    <input type="text" class="form-control" value="exemplo" />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}
