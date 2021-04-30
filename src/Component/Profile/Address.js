import imgbeja from "./img/beja.jpg"
import './Style.css';

function Address() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imgbeja} className="card-img-top" alt="Beja" />
            <div className="card-body">
                <h5 className="card-title">Adress</h5>
                <p className="card-text"><span className="addressAttribute">Country     :</span> Tunisia</p>
                <p className="card-text"><span className="addressAttribute">Governorate :</span> Béja</p>
                <p className="card-text"><span className="addressAttribute">City        :</span> Mahmoud El-Matri</p>
                <p className="card-text"><span className="addressAttribute">Number      :</span> 37</p>
                <a href="https://www.facebook.com/khelifa.Rossonero" target="_blank">Facebook link</a>
            </div>
        </div>
    );
}
export default Address;