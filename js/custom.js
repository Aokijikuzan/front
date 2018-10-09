function exo1()
{
	let un=12;
	let boulean=true;
	let nullar = null;
	let symb= Symbol(123456789);
	let nondef=undefined;
	let chaine="hello";
	console.log(un ,typeof un);
	console.log(boulean ,typeof boulean);
	console.log(nullar, typeof nullar);
	console.log(symb,typeof symb);
	console.log(nondef, typeof nondef);
	console.log(chaine, typeof chaine);
}
exo1();
function exo2(stringg)
{
	return stringg.charAt(0)+stringg.charAt(stringg.length-1);
}
let result=exo2("Le chat");
console.log(result);

function exo3(strin1,strin2)
{
	let result=parseInt(strin1) + parseInt(strin2);
	return result;
}

let result1=exo3("12","3");
console.log(result1);

function exo4(strin3)
{
	let compteur=1;
	let res="";
	let result=strin3.split(" ");
	for(let i = 0; i<result.length;i++)
	{
		
		if(i%2 === 0)
		{
			res=res+result[i].toUpperCase();
		}else
		{

			res+=result[i];
		}
	}
	return res;
}
let toto = exo4("un deux trois quatre cinq six");
console.log(toto);

function exo5()
{
	let dat=new Date();
	let dat1=dat.getHours();
	if (dat1 > 12)
	{
	console.log(dat1, "c'est l'apres midi\ ");
	}else
	{
		console.log(dat1,"cest le matin\ ");
	}

}
exo5();

function exo6( nomber)
{
	nomber.
}