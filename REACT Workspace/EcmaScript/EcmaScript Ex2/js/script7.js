function circle(rad)
{
    let areac = 3.14*rad*rad;
    return areac;
}

function triangle(base, height)
{
    let areat = 0.5*base*height;
    return areat;
}

function calculate(shape1, shape2)
{
    let ans1 = shape1(1.3);
    let ans2 = shape2(8.4, 4.5);

    console.log("Area of Circle = " + ans1);
    console.log("Area of Triangle = " + ans2);
}

calculate((rad)=>3.14*rad*rad, (base, height) =>0.5*base*height);
