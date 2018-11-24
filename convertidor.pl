use v5.28;
use Scalar::Util qw(looks_like_number);
my $escalaOriginal;
my $escalaResultado;
my $intentos = 0;
my $tempOriginal;
my $escala1;
my $escala2;
my $tempResultado;

do{
	if($intentos != 0){
		system("cls");
		say "Ingresaste escalas no validas, vuelva a intentarlo.\n";
	}
	say "Selecciona una de las siguientes escalas de temperatura:";
	say "1.Celsius\n2.Fahrenheit\n3.Kelvin\n4.Rankine";
	chomp($escalaOriginal = <>);
	say "Ahora selecciona la escala a convertir:";
	say "1.Celsius\n2.Fahrenheit\n3.Kelvin\n4.Rankine";
	chomp($escalaResultado = <>);
	$intentos = 1;
}while(!valEscalas($escalaOriginal, $escalaResultado));

$intentos = 0;
do{
	system("cls");
	if($intentos != 0){
		say "La temperatura no es valida.\n";
	}

	say "Ingresa la temperatura original:";
	chomp($tempOriginal = <>);
	$intentos = 1;
}while(!valTemp($tempOriginal)  || !esReal($tempOriginal,$escalaOriginal));
system("cls");

if($escalaOriginal == 1){
	$escala1 = "Celsius";
	if($escalaResultado == 2){
		$escala2 = "Fahrenheit";
		$tempResultado = ($tempOriginal*1.8)+32;
	}
	elsif($escalaResultado == 3){
		$escala2 = "Kelvin";
		$tempResultado = $tempOriginal+273.15;		
	}
	elsif($escalaResultado == 4){
		$escala2 = "Rankine";
		$tempResultado = (9*$tempOriginal)/5 + 491.67;
	}
}
elsif($escalaOriginal == 2){
	$escala1 = "Fahrenheit";
	if($escalaResultado == 1){
		$escala2 = "Celsius";
		$tempResultado = ($tempOriginal-32)/1.8;
	}
	elsif($escalaResultado == 3){
		$escala2 = "Kelvin";
		$tempResultado = (5/9)*($tempOriginal-32)+273.15;
	}
	elsif($escalaResultado == 4){
		$escala2 = "Rankine";
		$tempResultado = $tempOriginal + 459.67;
	}	
}
elsif($escalaOriginal == 3){
	$escala1 = "Kelvin";
	if($escalaResultado == 1){
		$escala2 = "Celsius";
		$tempResultado = $tempOriginal-273.15;
	}
	elsif($escalaResultado == 2){
		$escala2 = "Fahrenheit";
		$tempResultado = 1.8*($tempOriginal-273.15)+32;
	}
	elsif($escalaResultado == 4){
		$escala2 = "Rankine";
		$tempResultado = $tempOriginal*1.8;
	}
}
elsif($escalaOriginal == 4){
	$escala1 = "Rankine";
	if($escalaResultado == 1){
		$escala2 = "Celsius";
		$tempResultado = (5*($tempOriginal-491.67))/9;
	}
	elsif($escalaResultado == 2){
		$escala2 = "Fahrenheit";
		$tempResultado = $tempOriginal-459.67;
	}
	elsif($escalaResultado == 3){
		$escala2 = "Kelvin";
		$tempResultado = (5*($tempOriginal-491.67))/ 9 + 273.15;
	}
}

say "Escala original: $escala1 \nEscala resultado: $escala2 \nTemperatura resultado: $tempResultado";
sub valEscalas{
	my ($escala1,$escala2) = @_;
	if($escala1=~ /[^1-4]/ || $escala2=~ /[^1-4]/ || ($escala1 == $escala2)){
		return undef;
	}
	else{
		return 1;
	}
}

sub valTemp{
	my $temp = shift;
	if(looks_like_number($temp)){
		return 1;
	}
	else{
		return undef;
	}
}

sub esReal{
	my ($temp,$escala) = @_;
	if($escala==1 && $temp> -273.15){
		return 1;
	}
	elsif($escala == 2 && $temp>-459.67){
		return 1;
	}
	elsif(($escala == 3 || $escala == 4) && $temp>0){
		return 1;
	}
	else{
		return undef;
	}
}