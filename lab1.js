//Name: LAI Wing Yue
//Date: 30th January, 2015.

var gl;

window.onload=function init()
{
    var canvas=document.getElementById("gl-canvas");
    
    gl=WebGLUtils.setupWebGL(canvas);
    
    if (!gl)
    {
        alert("WebGL isn't available");
    }

    var click=0;
    
    canvas.addEventListener("click", function(event)
    {
        ++click;
        
        if (click==1)
        {
            vertices=new Float32Array([-0.5, -0.5,
                                       -0.5,  0.5,
                                        0.5,  0.5,
                                        0.5, -0.5]);
    
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
    
            var program=initShaders(gl, "vertex-shader", "fragment-shader");
            gl.useProgram(program);
    
            var buffer=gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);
    
            var vPosition=gl.getAttribLocation(program, "vPosition");
            gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(vPosition);

            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        }
        else if (click==2)
        {
		    vertices=new Float32Array([   0,    0,
		                                0.5,    0,
                                       0.25,  0.5,
                                      -0.25,  0.5,
                                       -0.5,    0,
                                      -0.25, -0.5,
                                       0.25, -0.5,
                                        0.5,    0]);
    
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
    
            var program=initShaders(gl, "vertex-shader", "fragment-shader");
            gl.useProgram(program);
    
            var buffer=gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);
    
            var vPosition=gl.getAttribLocation(program, "vPosition");
            gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(vPosition);

            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArrays(gl.TRIANGLE_FAN, 0, 8);
        }
        else
        {   vertices=new Float32Array([-0.5, -0.5,
                                          0,  0.5,
                                        0.5, -0.5]);
    
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
    
            var program=initShaders(gl, "vertex-shader", "fragment-shader");
            gl.useProgram(program);
    
            var buffer=gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    
            var vPosition=gl.getAttribLocation(program, "vPosition");
            gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(vPosition);

            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
        
            click=0;
        }
    });
    
    var vertices=new Float32Array([-0.5, -0.5,
                                      0,  0.5,
                                    0.5, -0.5]);
    
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    
    var program=initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);
    
    var buffer=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    
    var vPosition=gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
};
