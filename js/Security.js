class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createInput("").attribute('placeholder' , "CODE 1");
        this.access1.position(100,90);
        this.access1.style('background' , 'cyan');
       

        this.button1 = createButton('C H E C K');
        this.button1.position(100,120);
        this.button1.style('background' , 'black');
        this.button1.style('color' , 'white')


        this.access2 = createInput("").attribute('placeholder' , "CODE 2");
        this.access2.position(100,290);
        this.access2.style('background' , 'cyan');

        this.button2 = createButton('C H E C K');
        this.button2.position(100,320);
        this.button2.style('background' , 'black');
        this.button2.style('color' , 'white');


        this.access3 = createInput("").attribute('placeholder' , "CODE 3");
        this.access3.position(100,490);
        this.access3.style('background' , 'cyan');

        this.button3 = createButton('C H E C K');
        this.button3.position(100,520);
        this.button3.style('background' , 'black');
        this.button3.style('color' , 'white')



    }

    display(){

        // Add code to make the buttons function as expected
        this.button1.mousePressed(() =>{
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++
            }
        })

        this.button2.mousePressed(() =>{
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++
            }
        })

        this.button3.mousePressed(() =>{
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++
            }
        })
    

    }
}