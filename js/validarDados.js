function validarDadosform(frm){
 
if(document.formulario.nome.value=="" || document.formulario.nome.value.length < 8)
{
alert( "O campo nome não foi preenchido corretamente" );
document.formulario.nome.focus();
return false;
}
 
 
if( document.formulario.email.value=="" || document.formulario.email.value.indexOf('@')==-1 || document.formulario.email.value.indexOf('.')==-1 )
{
alert( "O campo E-MAIL não foi preenchido corretamente!" );
document.formulario.email.focus();
return false;
}
 
if (document.formulario.senha.value=="" || document.formulario.senha.value.length < 6)
{
alert( "O campo SENHA não foi preenchido corretamente!" );
document.formulario.senha.focus();
return false;
}

 
return true;
};