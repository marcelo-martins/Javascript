var pessoa1 = {
    nome: "jorgin",
    massa: 532,
    altura: 1.5,
    bmi: function(){
        bmi = this.massa/(this.altura^2);
        this.bmi = bmi;
        return this.bmi;
    }
};
console.log(pessoa1.bmi());
console.log(pessoa1);