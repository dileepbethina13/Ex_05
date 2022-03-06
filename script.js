function prblm1()
            {
                input = document.getElementById("inp").value;
                var splitted = input.split(" ");
                var arr = [];
                for(var i=0;i<splitted.length;i++)
                    arr.push(splitted[i].length);
                document.getElementById("a").innerHTML="Longest word: "+splitted[arr.indexOf(Math.max.apply(null, arr))];
                document.getElementById("b").innerHTML="Shortest word: "+splitted[arr.indexOf(Math.min.apply(null, arr))];
            }
            
 function calculate () {
                var height = parseFloat(document.getElementById("height").value);
                var weight = parseFloat(document.getElementById("weight").value);
                var bmi = weight/(height**2);
                var type;
                if(bmi<18)
                {
                    type = "Underweight";
                }
                else if(bmi>=18 && bmi<25)
                {
                    type = "Normal";
                }
                else if(bmi>=25 && bmi<30)
                {
                    type = "Overweight";
                }
                else if(bmi>30)
                {
                    type = "Obese";
                }
                document.getElementById("score").innerHTML = bmi;
                document.getElementById("type").innerHTML = type;
            }
            
function grow(){
                var arr = ["banana.jpg","apple.jpg", "orange.jpg","watermelon.jfif"];
               var count = Array(arr.length).fill(0);
                var x = document.getElementById("rows").value;
                var y = document.getElementById("Columns").value;
                var row=0;
                for(var i=0;i<x;i++)
                {
                    for(var j=0;j<y;j++)
                    {
                        var ran_num = Math.floor(Math.random() *arr.length);
                        if(count[ran_num]<((x*y)/arr.length))
                        {
                            document.getElementById("garden").innerHTML+="<img src="+arr[ran_num]+" width=100px height=100px alt=An image was here>";
                            row+=1;
                            count[ran_num]+=1;
                            if(row==y)
                                    {
                                        
                                         document.getElementById("garden").innerHTML+="<br>";
                                          row=0;
                                    }
                        }
                        else{
                            for(var k=0;k<count.length;k++)
                            {
                                if(count[k]<((x*y)/arr.length))
                                {
                                    document.getElementById("garden").innerHTML+="<img src="+arr[k]+" width=100px height=100px alt=An image>";
                                    row+=1;
                                    count[k]+=1;
                                    if(row==y)
                                    {
                                                document.getElementById("garden").innerHTML+="<br>";
                                          row=0;
                                          break;
                                    }
                                }
                            }
                        }
                 }
                }
                document.getElementById("garden").innerHTML+="<br>";
                          }
                          
  function convert()
            {
                var from_index = document.getElementById("from").selectedIndex;
                var to_index = document.getElementById("to").selectedIndex;
                var val = document.getElementById("data").value;
                if(from_index==1 && to_index==1)
                {
                    document.getElementById("answer").innerHTML="Result: "+val*67.12+"INR";
                }
                else if(from_index==0 && to_index==0)
                {
                    document.getElementById("answer").innerHTML="Result: "+val/67.12+"$";
                }
            }
            
            document.getElementById("btn").addEventListener("click", flipfn);
            var val;
            head_count=0;
            tail_count=0;
            function flipfn()
            {
               val = Math.floor(Math.random() *2)+0 == 1;
            if(val==1)
            {
                document.getElementById("coin").src="tails.jfif";
                tail_count+=1;
                document.getElementById("num_tails").innerHTML=tail_count;
            }
            else
            {
                 document.getElementById("coin").src="heads.jfif";
                 head_count+=1;
                 document.getElementById("num_heads").innerHTML=head_count;
            }
            }
         function calc()
                {
                     var half_kg = document.getElementById("small").value;
                var one_kg = document.getElementById("medium").value;
                var two_kg = document.getElementById("large").value;
                    var total;
                    total=(half_kg*100)+(one_kg*200)+(two_kg*400);
                    total+=(total*0.09)+parseFloat(total*document.querySelector('input[name="tip"]:checked').value/100);
                    document.getElementById("price").innerHTML=total+" INR";
                }
