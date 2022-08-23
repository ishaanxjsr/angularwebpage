var app =angular.module("myApp", [])
app.controller("CounterController", function($scope) {
    $scope.DiscountApply=false;
    $scope.Bill=false;
    $scope.Total=0;
    $scope.TRoom=0;
    $scope.Adult=0;
    $scope.FirstDate= new Date();
    $scope.SecondDate=new Date();

    $scope.Coupons=[
        {
            RoomCoupon:"SUMMER25",
            Discount:25,
        },
        {
            RoomCoupon:"PROMO10",
            Discount:10,
        }
     ];
     $scope.NoCoupon=[
        {
            RoomCoupon:" ",
            Discount:0,
        }
     ];
     
     $scope.Rooms=[
        {
            Name:"AC Room Only",
            Quantity:0,
            Price:14000,
            DisPrice:14000
        },
        {
            Name:"Non AC Room with Breakfast",
            Quantity:0, 
            Price:15000,
            DisPrice:15000
        },
        {
            Name:"AC Room with Breakfast and Dinner",
            Quantity:0,
            Price:17000,
            DisPrice:17000
        }
        
     ];
      

       $scope.increment=function(room){
        $scope.Bill=true;
        room.Quantity+=1;
        TotalPay();
        TotalRoom();
       
       }

       $scope.decrement=function(room){
        
        if(room.Quantity<=0){
            $scope.Bill=false;
            room.Quantity=0;
        }
        else
            room.Quantity-=1;

            TotalPay();
            TotalRoom();
       };
        
       $scope.cupon=function(coupon){
            $scope.DiscountApply=true;
            $scope.Rooms.forEach(function(va){
                va.change=coupon.RoomCoupon;
                va.DisPrice=((va.Price)*(100-coupon.Discount))/100;
                
            });
            
         TotalPay();
        };

        $scope.remove=function(RoomCoupon){
            $scope.DiscountApply=false;
            $scope.Rooms.forEach(function(va){
                va.change=RoomCoupon.RoomCoupon;
                va.DisPrice=(va.Price);
                console.log("cupon",RoomCoupon);
                
            });
            TotalPay();
           
        }



        function TotalPay(){
            var Index=0;
            $scope.Rooms.forEach(function(x){

                Index+=x.Quantity*x.DisPrice;

           
            })
            $scope.Total=Index;
        }



        function TotalRoom(){
            var TR = 0;
            $scope.Rooms.forEach(function(x){
            
            TR+=x.Quantity;
            
        })

        $scope.TRoom=TR;

        }


        $scope.datediff=function()
       
       {
        $scope.difference=0
        var oneDay = 24*60*60*1000;
        $scope.difference=Math.round(Math.abs((FirstDate.getTime() - SecondDate.getTime())/(oneDay)));
    }




       }

);

                    