/*
Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico
para sistemas de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F
*/


const changeGradesToAmericanStyle = (brazilianGrade) => {

    
   
    let gradeA = brazilianGrade >= 90 && brazilianGrade <=100;
    let gradeB = brazilianGrade >= 80 && brazilianGrade <90;
    let gradeC = brazilianGrade >= 70 && brazilianGrade <80;
    let gradeD = brazilianGrade >= 60 && brazilianGrade <70;
    let gradeF = brazilianGrade < 60 && brazilianGrade >=0;

    // console.log(brazilianGrade)
    
    // switch(brazilianGrade){
        
    //     case (brazilianGrade > 90):
    //         americanGrade = "A"
    //         break
    //     case (brazilianGrade > 80 && brazilianGrade <=89):
    //         americanGrade = "B"
    //         break
    //     case (brazilianGrade > 70 && brazilianGrade <=79):
    //         americanGrade = "C"
    //         break
    //     case (brazilianGrade > 60 && brazilianGrade <=69):
    //         americanGrade = "D"
    //         break
    //     default:
    //         americanGrade =  "Fora do padrão de nota!"
    //         console.log("HRERE")
    //         break
    // }
    // console.log(americanGrade)
    // return americanGrade;

    if (gradeA) return "A";
    if (gradeB) return "B";
    if (gradeC) return "C";
    if (gradeD) return "D";
    if (gradeF) return "F";
    //return "Não existe nota"
    throw new Error("Nota não padronizada")

}


let grade = 101;

try{
    
    console.log("Student got an ", changeGradesToAmericanStyle(grade));
}catch(errorNoExistGrade){
    console.log(errorNoExistGrade)
}