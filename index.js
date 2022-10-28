class usuarios {
    constructor(nombre, saldo, password) {
      this.nombre = nombre;
      this.saldo = saldo;
      this.password = password;
    }
    ingresardinero(montoi) {
      if (montoi + this.saldo < 991 && montoi + this.saldo > 9) {
        this.saldo = this.saldo + montoi;
        window.alert("¡INGRESO EXITOSO!");
        window.alert("¡Este es su nuevo estado de cuenta!");
        consulta();
      } else {
        window.alert("Ha ingresado un monto invalido.");
        window.alert("Recuerde que su saldo no puede exceder de $990.");
      }
    }
    retirardinero(montor) {
      if (this.saldo - montor >= 10) {
        this.saldo = this.saldo - montor;
        window.alert("¡RETIRO EXITOSO!");
        window.alert("¡Este es su nuevo estado de cuenta!");
        consulta();
      } else {
        window.alert("Ha ingresado un monto invalido.");
        window.alert("Recuerde que su saldo no puede disminuir de $10.");
      }
    }
  }
  var mali = new usuarios("Mali", 200, "helloworld");
  var gera = new usuarios("Gera", 290, "133t");
  var maui = new usuarios("Maui", 67, "123");
  var usuario;
  var pantalla = document.getElementById("pantalla");
  function mostraringresomonto() {
    pantalla.innerHTML =
      "<div id='ingresar'><div id='flex'><p>Ingrese el monto a :</p><input type:'number' id='monto'></div><p id='regresar'> <== Regresar</p></div>";
  }
  function mostrarmenu() {
    pantalla.innerHTML =
      "<div id='menu'><p id='consulta'>1. Consultar saldo     </p><p id='i_monto'>2. Ingresar monto</p><p id='r_monto'>     3. Retirar monto</p></div>";
  }
  function mostrarinicio() {
    window.alert("¡Gracias por su preferencia!");
    pantalla.innerHTML =
      "<br><br><center><div id='ingreso'><form><label for='nombre'>Ingrese su nombre:</label><input type:'text' id='nombre'><br /><label for='contraseña'>Ingrese su contraseña:</label><input type:'text' id='contraseña'></form></div></center>";
  }
  function penter() {
    let idnombre = document.getElementById("nombre");
    let idcontraseña = document.getElementById("contraseña");
    let ingmonto = document.getElementById("ing_monto");
    let retmonto = document.getElementById("ret_monto");
    if (idnombre != null || idcontraseña != null) {
      if (idnombre.value == mali.nombre && idcontraseña.value == mali.password) {
        window.alert(`INGRESO EXITOSO... ¡Hola ${idnombre.value}!`);
        mostrarmenu();
        usuario = mali;
      } else if (
        idnombre.value == gera.nombre &&
        idcontraseña.value == gera.password
      ) {
        window.alert(`INGRESO EXITOSO... ¡Hola ${idnombre.value}!`);
        mostrarmenu();
        usuario = gera;
      } else if (
        idnombre.value == maui.nombre &&
        idcontraseña.value == maui.password
      ) {
        window.alert(`INGRESO EXITOSO... ¡Hola ${idnombre.value}!`);
        mostrarmenu();
        usuario = maui;
      } else if (
        idnombre.value != mali.nombre &&
        idcontraseña.value != mali.password
      ) {
        window.alert("HA INTRODUCIDO VALORES ERRONEOS.");
        window.alert(" Intentelo nuevamente...")
      }
      idnombre.value = "";
      idcontraseña.value = "";
    } else {
      if (ingmonto != null) {
        let montoi = parseInt(ingmonto.value);
        usuario.ingresardinero(montoi);
        ingmonto.value = "";
      } else if (retmonto != null) {
        let montor = parseInt(retmonto.value);
        usuario.retirardinero(montor);
        retmonto.value = "";
      }
    }
    return usuario;
  }
  function consulta() {
    pantalla.innerHTML =
      "<div id='consultar'><p id='resultado'>Tienes $" +
      usuario.saldo.toString() +
      " disponible.</p><p id='regresar'><== Regresar</p></div>";
  }
  function pf1() {
    let c_saldo = document.getElementById("consulta");
    if (c_saldo != null) {
      pantalla.innerHTML =
        "<div id='consultar'><p id='resultado'>Tienes S/." +
        usuario.saldo.toString() +
        " disponible.</p><p id='regresar'><== Regresar</p></div>";
    }
  }
  function pf2() {
    let i_saldo = document.getElementById("i_monto");
    let regresar = document.getElementById("regresar");
    if (i_saldo != null) {
      pantalla.innerHTML =
        "<div id='ingresar'><div id='flex'><p>Ingrese el monto:</p><input type:'number' readonly id='ing_monto'></div><p id='regresar'> <== Regresar</p></div>";
    } else if (regresar != null) {
      pantalla.innerHTML =
        "<div id='menu'><p id='consulta'>1. Consultar saldo</p><p id='i_monto'>2. Ingresar monto</p><p id='r_monto'>3. Retirar monto</p></div>";
    }
  }
  function pf3() {
    let c_saldo = document.getElementById("consulta");
    let regresar = document.getElementById("regresar");
    if (c_saldo != null) {
      pantalla.innerHTML =
        "<div id='retirar'><div id='flex'><p>Ingrese el monto a retirar:</p><input type:'number' readonly id='ret_monto'></div><p id='regresar'><== Regresar</p></div>";
    } else if (regresar != null) {
      pantalla.innerHTML =
        "<div id='menu'><p id='consulta'>1. Consultar saldo</p><p id='i_monto'>2. Ingresar monto</p><p id='r_monto'>3. Retirar monto</p></div>";
    }
  }
  function pclear() {
    let idnombre = document.getElementById("nombre");
    let idcontraseña = document.getElementById("contraseña");
    let ingmonto = document.getElementById("ing_monto");
    let retmonto = document.getElementById("ret_monto");
    if (idnombre != null || idcontraseña != null) {
      idnombre.value = "";
      idcontraseña.value = "";
    } else if (ingmonto != null) {
      ingmonto.value = "";
    } else if (retmonto != null) {
      retmonto.value = "";
    }
  }
  
  function p1() {
    let ingmonto = document.getElementById("ing_monto");
    let retmonto = document.getElementById("ret_monto");
    if (ingmonto != null) {
      let temp = ingmonto.value + "1";
      ingmonto.value = temp;
    } else if (retmonto != null) {
      let temp = retmonto.value + "1";
      retmonto.value = temp;
    }
  }
  function p2() {
    let ingmonto = document.getElementById("ing_monto");
    let retmonto = document.getElementById("ret_monto");
    if (ingmonto != null) {
      let temp = ingmonto.value + "2";
      ingmonto.value = temp;
    } else if (retmonto != null) {
      let temp = retmonto.value + "2";
      retmonto.value = temp;
    }
  }
  function p3() {
    let ingmonto = document.getElementById("ing_monto");
    let retmonto = document.getElementById("ret_monto");
    if (ingmonto != null) {
      let temp = ingmonto.value + "3";
      ingmonto.value = temp;
    } else if (retmonto != null) {
      let temp = retmonto.value + "3";
      retmonto.value = temp;
    }
  }
  function p4() {
    let ingmonto = document.getElementById("ing_monto");
    let retmonto = document.getElementById("ret_monto");
    if (ingmonto != null) {
      let temp = ingmonto.value + "4";
      ingmonto.value = temp;
    } else if (retmonto != null) {
      let temp = retmonto.value + "4";
      retmonto.value = temp;
    }
  }
  function p5() {
    let ingmonto = document.getElementById("ing_monto");
    let retmonto = document.getElementById("ret_monto");
    if (ingmonto != null) {
      let temp = ingmonto.value + "5";
      ingmonto.value = temp;
    } else if (retmonto != null) {
      let temp = retmonto.value + "5";
      retmonto.value = temp;
    }
  }
  function p6() {
    let ingmonto = document.getElementById("ing_monto");
    let retmonto = document.getElementById("ret_monto");
    if (ingmonto != null) {
      let temp = ingmonto.value + "6";
      ingmonto.value = temp;
    } else if (retmonto != null) {
      let temp = retmonto.value + "6";
      retmonto.value = temp;
    }
  }
  function p7() {
    let ingmonto = document.getElementById("ing_monto");
    let retmonto = document.getElementById("ret_monto");
    if (ingmonto != null) {
      let temp = ingmonto.value + "7";
      ingmonto.value = temp;
    } else if (retmonto != null) {
      let temp = retmonto.value + "7";
      retmonto.value = temp;
    }
  }
  function p8() {
    let ingmonto = document.getElementById("ing_monto");
    let retmonto = document.getElementById("ret_monto");
    if (ingmonto != null) {
      let temp = ingmonto.value + "8";
      ingmonto.value = temp;
    } else if (retmonto != null) {
      let temp = retmonto.value + "8";
      retmonto.value = temp;
    }
  }
  function p9() {
    let ingmonto = document.getElementById("ing_monto");
    let retmonto = document.getElementById("ret_monto");
    if (ingmonto != null) {
      let temp = ingmonto.value + "9";
      ingmonto.value = temp;
    } else if (retmonto != null) {
      let temp = retmonto.value + "9";
      retmonto.value = temp;
    }
  }
  function p0() {
    let ingmonto = document.getElementById("ing_monto");
    let retmonto = document.getElementById("ret_monto");
    if (ingmonto != null) {
      let temp = ingmonto.value + "0";
      ingmonto.value = temp;
    } else if (retmonto != null) {
      let temp = retmonto.value + "0";
      retmonto.value = temp;
    }
  }