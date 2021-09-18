let tinhDiemTB = () => {
    let inpToan = document.querySelector("#inpToan").value;
    let inpLy = document.querySelector("#inpLy").value;
    let inpHoa = document.querySelector("#inpHoa").value;
    let inpVan = document.querySelector("#inpVan").value;
    let inpSu = document.querySelector("#inpSu").value;
    let inpDia = document.querySelector("#inpDia").value;
    let inpEnglish = document.querySelector("#inpEnglish").value;
    let spanTBKhoi1 =  document.querySelector("#tbKhoi1");
    let spanTBKhoi2 =  document.querySelector("#tbKhoi2");

    let diemTB1 = (...parameter) => {
        console.log(parameter);
        let total = 0;
        let index = 0;
        let tong = 0;
        parameter.map((item)=> {
           item = Number(item);
           if(item) {
               index += 1;
           }
           total = item;
           tong += total;
        })
        
        if(parameter.length === 3) {
            spanTBKhoi1.innerHTML = (tong / index).toFixed(2);
        }

        if(parameter.length === 4) {
            spanTBKhoi2.innerHTML = (tong / index).toFixed(2);
        }
        
        if(isNaN(spanTBKhoi2.innerHTML)) {
            spanTBKhoi2.innerHTML = "";
        }else if(isNaN(spanTBKhoi1.innerHTML)) {
            spanTBKhoi1.innerHTML = "";
        }
    }

    diemTB1(inpToan,inpLy,inpHoa);
    diemTB1(inpVan,inpSu,inpDia,inpEnglish);
}




document.getElementById("btnKhoi1").addEventListener("click", tinhDiemTB);
document.getElementById("btnKhoi2").addEventListener("click", tinhDiemTB);


