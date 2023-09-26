function pay() {
    const money = document.getElementById("money").value;
    const card_title = document.getElementById("card_title");
    const company_name = document.getElementById("company_name").value;
    const company_name_title = document.getElementById("company_name_title");
    card_title.textContent = "المبلغ الإجمالي :" + money + " ريال ";
    company_name_title.textContent = company_name;

}
