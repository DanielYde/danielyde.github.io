  function Countdown() {
      let i = 11;
      console.log("|Countdown from 10|")
      while (i>0) {
        i = i - 1;
        console.log(i);
    }
  }      

    function Plus() {
      let i = 0
      let n = 0
      console.log("|1+2+3+4+5+... 20|")
      while (i<210) {
        i = i + n + 1
        n = n + 1
        console.log(i)
      }
    }

    function Tabeller() {

      let totabellen = 0;
      console.log("|2-table|")
      while (totabellen < 20) {
        totabellen = totabellen + 2;
        console.log(totabellen)

      }

      let tretabellen = 0;
      console.log("|3-table|")
      while (tretabellen < 30) {
        tretabellen = tretabellen + 3
        console.log(tretabellen)
      }

      let firetabellen = 0;
      console.log("|4-table|")
      while (firetabellen < 40) {
        firetabellen = firetabellen + 4
        console.log(firetabellen)
      }

      let femtabellen = 0;
      console.log("|5-table|")
      while (femtabellen < 50) {
        femtabellen = femtabellen + 5
        console.log(femtabellen)
      }

      let sekstabellen = 0;
      console.log("|6-table|")
      while (sekstabellen < 60) {
        sekstabellen = sekstabellen + 6
        console.log(sekstabellen)
      }

      let syvtabellen = 0;
      console.log("|7-table|")
      while (syvtabellen < 70) {
        syvtabellen = syvtabellen + 7
        console.log(syvtabellen)
      }

      let ottetabellen = 0;
      console.log("|8-table|")
      while (ottetabellen < 80) {
        ottetabellen = ottetabellen + 8
        console.log(ottetabellen)
      }

      let nitabellen = 0;
      console.log("|9-table|")
      while (nitabellen < 90) {
        nitabellen = nitabellen + 9
        console.log(nitabellen)
      }

      let titabellen = 0;
      console.log("|10-table|")
      while (titabellen < 100) {
        titabellen = titabellen + 10
        console.log(titabellen)
      }

    }

    function Ligninger() {
      let yligning = 0;
      let xligning = 0;
      console.log("|Ligninger(1 - 10) y = 3 * x * x + 6 * x + 9|")
      while(xligning <= 10){
        yligning = 3 * xligning * xligning + 6 * xligning + 9;
        console.log("|", "y =", yligning, "|" , "x =", xligning, "|")
        xligning = xligning + 1;

      }
      console.log("|Ligninger(10 - 100) y = 3 * x * x + 6 * x + 9|")
      xligning = 10;
      while(xligning <= 100) {
        yligning = 3 * xligning * xligning + 6 * xligning + 9;
        console.log("|", "y =", yligning, "|" , "x =", xligning, "|")
        xligning = xligning + 10;

      }



    }



  