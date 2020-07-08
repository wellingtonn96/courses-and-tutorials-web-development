/*1 Faça um programa que receba dois numeros, 
calcule e mostre a subtração do primeiro pelo segundo*/

public class Program
{	
	static void MyMethod()
	{
		Console.WriteLine("Enter with the first number: ");
		int numberOne = Convert.ToInt32(Console.ReadLine());
		Console.WriteLine("Enter with the second number:"); 
		int numberTwo = Convert.ToInt32(Console.ReadLine());
		Console.WriteLine(Convert.ToString(numberOne - numberTwo));
	}
	
	public static void Main()
	{
		MyMethod();
	}
}

/*2 Faça um programa que receba três numeros, calcule e mostre a multipicação destes mesmos.*/
using System;
					
public class Program
{
	static void readFunc()
	{	
		Console.WriteLine("Enter with the first number");
		int numberOne = Convert.ToInt32(Console.ReadLine());
		Console.WriteLine("Enter with the second number");
		int numberTwo = Convert.ToInt32(Console.ReadLine());
		Console.WriteLine("Enter with the third number");
		int numberThird = Convert.ToInt32(Console.ReadLine());
		Multiplication(numberOne, numberTwo, numberThird);
	}
	
	static void Multiplication(int numberOne, int numberTwo,int numberThird)
	{
		Console.WriteLine(Convert.ToString(numberOne * numberTwo * numberThird));
	}
	
	public static void Main()
	{
		readFunc();
	}
}

/* 3 Faça um programa que receba dois numeros e mostre a divisão do primeiro
numero pelo segundo. Sabe-se que o segundo não pode ser zero, portanto não é necessário se 
preocupar com validações */
using System;
					
public class Program
{	
	static void MyMethod()
	{	
		Console.WriteLine("Enter with the first number");
		int numberOne = Convert.ToInt32(Console.ReadLine());
		Console.WriteLine("Enter with the second number");
		int numberTwo = Convert.ToInt32(Console.ReadLine());
		Console.WriteLine(Convert.ToString(numberOne / numberTwo));
	}
	
	public static void Main()
	{
		MyMethod();
	}
}


/*4 Façã um programa que receba duas notas, calcule e mostre a média ponderada 
destas notas peso 2 para primeira nota e peso 3 para segunda nota*/

using System;
					
public class Program
{
	static void inputFunc()
	{	
		Console.WriteLine("Enter with the first number");
		int numberOne = Convert.ToInt32(Console.ReadLine());
		Console.WriteLine("Enter with the second number");
		int numberTwo = Convert.ToInt32(Console.ReadLine());
		avarangeGrades(numberOne, numberTwo);
	}
	
	static void avarangeGrades(int numberOne, int numberTwo)
	{
		Console.WriteLine(Convert.ToString((numberOne + numberTwo)/2));
	}
	
	public static void Main()
	{
		inputFunc();
	}
}

/*Faça um programa que receba o preço de um produto, calcule e mostre o novo preço, sabendo que este
sofreu um desconto de 10%*/

using System;
					
public class Program
{
    	
	static void InputFunc()
	{	
		Console.WriteLine("Insert the product's price: ");
		double priceProduct = Convert.ToInt32(Console.ReadLine());
		descontPercent(priceProduct);
	}
	
	static void descontPercent(double price)
	{
		Console.WriteLine(Convert.ToString(price - (0.1 * price)));
	}
	
	public static void Main()
	{
		InputFunc();
	}
}

/*6 um funcionario recebe um sálario fixo de mais de 4% de comissão sobre as vendas. Faça 
um programa que receba o sãlario fixo de um funiconario e o valor de suas vendas. calcule 
e mostre a comissão e o sálario final do funcionário.*/

using System;
					
public class Program
{
	 static void InputFunc()
	 {
		Console.WriteLine("Enter with employee salary: ");
		double EmployeeSalary = Convert.ToInt32(Console.ReadLine());
		Console.WriteLine("Enter with employee sales: ");
		double EmployeeSales = Convert.ToInt32(Console.ReadLine());
		CalcSalary(EmployeeSalary, EmployeeSales);
	 }
	
	static void CalcSalary(double EmployeeSalary, double EmployeeSales)
	{	
		Console.Write("Total Salary is: ");
		Console.WriteLine(Convert.ToString(EmployeeSalary + (0.04 * EmployeeSales)));
	}
	
	public static void Main()
	{
		InputFunc();
	}
}

/*
7 Faça um programa que receba o peso de uma pessoa e calcule e mostre
	a) o novo peso se a pessoa engordar 15% sobre o peso digitado 
	b) o novo peso se a pessoa emagrecer 20% sobre o peso digitado
 */

using System;

public class Program
{
	static void inputFunc()
	{
		Console.WriteLine("Digite seu peso");
		double weight = Convert.ToInt32(Console.ReadLine());
		calcWeight(weight);
	}

	static void calcWeight(double weight)
	{
		Console.WriteLine(Convert.ToString((0.15 * weight) + weight));
		Console.WriteLine(Convert.ToString(weight - (0.20 * weight)));
	}

	public static void Main()
	{
		inputFunc();
	}
}

/*8 - Faça um programa que calcule e mostre a tabuada de um número digitado pelo usuário */

using System;

public class Program
{
	static void InputFunc() 
	{	
		Console.WriteLine("Digite um numero: ");
		int num = Convert.ToInt32(Console.ReadLine());
		CalcNum(num);
	}

	static void CalcNum(int num)
	{
	 int i = 0;	
	while(i <= 10){
		Console.WriteLine(Convert.ToString(num+"*"+i+"="+(num * i)));
		i++;
	}
	}
	public static void Main()
	{
		InputFunc();
	}
}

/*9 - Faça um programa que receba quatro notas de um aluno, calcule e mostre a 
média aritmética e a messagem de aprovado ou reporvado, considerando para aprovação média 7*/

using System;

public class Program                         
{
	static void InputFunc() 
	{	
		double test1 = Convert.ToInt32(Console.ReadLine());
		double test2 = Convert.ToInt32(Console.ReadLine());
		double test3 = Convert.ToInt32(Console.ReadLine());
		double test4 = Convert.ToInt32(Console.ReadLine());
		avarangeGrades(test1, test2, test3, test4);
	}


	static void avarangeGrades(double test1, double test2, double test3, double test4)
	{
		double total = test1 + test2 + test3 + test4;
		double avarange = total / 4;
		if (avarange >= 7)
		{
			Console.WriteLine("Aluno aprovado! média: "+avarange);
		}
		else 
		{
			Console.WriteLine("Aluno Reporvado média: "+avarange);	
		}
	}
	
	public static void Main()
	{
		InputFunc();
	}
}

/*
10 - Faça um programa que verifique e mostre os números entre 1000 e 2000 (inclusive) 
que, quando por 11, produzam resto igual a 5.
*/

using System;

public class Program
{
	static void restOfDivision()
	{	
		int count = 0;
		for(int i = 1000; i<=2000; i++)
		{
			if(i % 11==5)
			{
				count++;
			}
		}
		Console.WriteLine("Count value is: "+count);
	}
	
	public static void Main()
	{
		restOfDivision();
	}
}


/* 11 - Faça um programa que mostre todas as tabuadas dos numeros de 1 a 10 */


using System;

public class Program
{
	static void allMultiplicationsTables()
	{
		for(int i = 1; i <=10; i++)
		{
			Console.WriteLine("-----------------Tabuada do "+i+"-------------------");
			for(int n = 1; n <=10; n++)
			{	
				Console.WriteLine(i+"*"+n+"="+(i*n));
			}
		}
	}
	
	public static void Main()
	{
		allMultiplicationsTables();
	}
}

/* 12 - Uma loja tem 15 clientes cadastrados e deseja enviar uma 
conrrespondência a cada um deles anucinando um bônus especial. Faça um
programa que leia o nome do cliente e o valor de suas compras no ano passado .
Calcule e mostre um bônus de 10% se o valor das compras for menor que $$ 1000 de 15% caso
o contrario*/

using System;

public class Program
{
	
	static void InputFunc()
	{
		int i = 0;
		while(i <= 15)
		{	
			Console.WriteLine("Digite o nome do cliente: ");
			string name = Console.ReadLine();
			Console.WriteLine("Digite o valor tota de compras do cliente: ");
			int value = Convert.ToInt32(Console.ReadLine());
			ClientBonus(name, value);
			i++;
		}
	}
	
	static void ClientBonus(string name, double value)
	{
		if(value >= 1000)
		{
			Console.WriteLine("Parabéns senhor(a) "+name+" voçê ganhou um bónus de: "+(0.15 * value));
		}
		else
		{
			Console.WriteLine("Parabéns senhor(a) "+name+" voçê ganhou um bónus de:"+(0.10 * value));
		}
	}
	
	public static void Main()	
	{
		InputFunc();
	}
}

/*faça um programa que gera uma lista com números aleatórios onde o 
usuário possa digitar um número para ser encontrado nesta lista, 
caso o número exista, retorna true caso o contrário false*/

using System;

public class Program
{
	
	 static void main()
	 {
		 int num = Convert.ToInt32(Console.ReadLine());
		 int[] list = generateList(num);
		 int item = Convert.ToInt32(Console.ReadLine());
		 Console.WriteLine(SearchInList(item, list));
	 }
	
	static bool SearchInList(int item, int[] list)
	{	
		foreach(int i in list)
		{
			if(i == item)
			{
				return true;
			}
		}
		return false;
	}


	static bool SearchInList(int item, int[] list)
	{

	}
	
	static int[] generateList(int num)
	{	
		Random rnd = new Random();
		int []  list = new int [num]; 
		for(int i=0; i < num; i++)
		{
			list[i] = rnd.Next(1 ,100);
		}
		return list;
	}
	
	public static void Main()
	{
		main();
	}
}

using System;
					
public class Dog {
	
	String name;
	String breed;
	int age;
	String color;
	
	public Dog(String name, String breed, int age, String color)
	{
		this.name = name;
		this.breed = breed;
		this.age = age; 
		this.color = color;
	}
	
	public String getName()
	{
		return name;
	}
	
	public String getBreed()
	{
		return breed;
	}
	
	public int getAge()
	{
		return age;
	}
	public String getColor()
	{
		return color;
	}
	public String toString()
	{
		return("Hi my name is " + this.getName() + 
			   ".\nMy breed, age and color are " + this.getBreed()
			  + ", "+ this.getAge() + ", " + this.getColor());
	}
	
	public static void Main(String[] args)
	{
		Dog tuffy = new Dog("tuffy", "papilon", 5, "white");
		Console.WriteLine(tuffy.toString());
	}
}	