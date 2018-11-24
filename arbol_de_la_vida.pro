%filo,reino
pertenece(firmicutes,monera). 
pertenece(euryarchaeota,monera). 
%clase, filo
pertenece(bacilli,firmicutes). 
pertenece(clostridia,firmicutes).
pertenece(thermoplasmata,euryarchaeota).
pertenece(methanobacteria,euryarchaeota).
%orden,clase
pertenece(lactobacillales,bacilli). 
pertenece(clostridiales,clostridia). 
pertenece(natranaerobiales,clostridia). 
pertenece(halanaerobiales,clostridia). 
pertenece(thermoplasmatales,thermoplasmata).
pertenece(methanomassiliicoccales,thermoplasmata).
pertenece(methanobacteriales,methanobacteria).
pertenece(methanocellales,methanobacteria).
%familia,orden
pertenece(aerococcaceae,lactobacillales). 
pertenece(carnobacteriaceae,lactobacillales). 
pertenece(lachnospiraceae,clostridiales). 
pertenece(ruminococcaceae,clostridiales). 
pertenece(natranaerobiaceae,natranaerobiales). 
pertenece(halobacteroidaceae,halanaerobiales). 
pertenece(ferroplasmaceae,thermoplasmatales).
pertenece(picrophilaceae,thermoplasmatales).
pertenece(methanomassiliicoccaceae,methanomassiliicoccales).
pertenece(methanobacteriaceae,methanobacteriales).
pertenece(methanocellaceae,methanocellales).
%genero,familia
pertenece(aerococcus,aerococcaceae). 
pertenece(facklamia,aerococcaceae).
pertenece(agitococcus,carnobacteriaceae).
pertenece(allofustis,carnobacteriaceae).
pertenece(abyssivirga,lachnospiraceae).
pertenece(acetivibrio,ruminococcaceae).
pertenece(natranaerobaculum,natranaerobiaceae).
pertenece(acetohalobium,halobacteroidaceae).
pertenece(acidiplasma,ferroplasmaceae).
pertenece(picrophilus,picrophilaceae).
pertenece(methanomassiliicoccus,methanomassiliicoccaceae).
pertenece(methanobacterium,methanobacteriaceae).
pertenece(methanobrevibacter,methanobacteriaceae).
pertenece(methanocella,methanocellaceae).
%especie,genero
pertenece('aerococcus christensenii',aerococcus). 
pertenece('aerococcus sanguinicola',aerococcus).
pertenece('facklamia miroungae',facklamia).
pertenece('facklamia sourekii',facklamia).
pertenece('agitococcus lubricus',agitococcus).
pertenece('allofustis seminis',allofustis).
pertenece('abyssivirga alkaniphila',abyssivirga).
pertenece('acetivibrio cellulolyticus',acetivibrio).
pertenece('natranaerobaculum magadiense',natranaerobaculum).
pertenece('acetohalobium arabaticum',acetohalobium).
pertenece('acidiplasma aeolicum',acidiplasma).
pertenece('acidiplasma cupricumulans', acidiplasma).
pertenece('picrophilus oshimae',picrophilus).
pertenece('methanomassiliicoccus luminyensis',methanomassiliicoccus).
pertenece('methanobacterium aarhusense',methanobacterium).
pertenece('methanobacterium aggregans',methanobacterium).
pertenece('methanobrevibacter arboriphilicus', methanobrevibacter).
pertenece('methanobrevibacter boviskoreani', methanobrevibacter).
pertenece('methanocella arvoryzae',methanocella).
pertenece('methanocella conradii',methanocella).

%Programa 1
relacion(A,B):-
	validacion(A),
	validacion(B),
	buscar(A,B).


validacion(X):- conectados(X,monera) -> true; write(X), write(' no existe en la base de conocimiento.'), nl.

buscar(A,B):-
	A == B,
	write('Son la misma especie.').

buscar(A,B):-
 	pertenece(A,C),
	pertenece(B,C),
	write('Coinciden en el Genero: '),write(C).

buscar(A,B):-
	pertenece(A,C),
	pertenece(B,D),
	pertenece(C,E),
	pertenece(D,E),
	write('Coinciden en la Familia: '),write(E).

buscar(A,B):-
	pertenece(A,C),
	pertenece(B,D),
	pertenece(C,E),
	pertenece(D,F),
	pertenece(E,G),
	pertenece(F,G),
	write('Coinciden en el Orden: '),write(G).

buscar(A,B):-
	pertenece(A,C),
	pertenece(B,D),
	pertenece(C,E),
	pertenece(D,F),
	pertenece(E,G),
	pertenece(F,H),
	pertenece(G,I),
	pertenece(H,I),
	write('Coinciden en la Clase: '),write(I).

buscar(A,B):-
	pertenece(A,C),
	pertenece(B,D),
	pertenece(C,E),
	pertenece(D,F),
	pertenece(E,G),
	pertenece(F,H),
	pertenece(G,I),
	pertenece(H,J),
	pertenece(I,K),
	pertenece(J,K),
	write('Coinciden en el Filo: '),write(K).

buscar(A,B):-
	pertenece(A,C),
	pertenece(B,D),
	pertenece(C,E),
	pertenece(D,F),
	pertenece(E,G),
	pertenece(F,H),
	pertenece(G,I),
	pertenece(H,J),
	pertenece(I,K),
	pertenece(J,L),
	pertenece(K,M),
	pertenece(L,M),
	write('Solo coinciden en el Reino: '),write(M).


%Programa 2

es_parte_de(A,B):- conectados(A,B)-> write(A),write(' pertenece a '),write(B); write(A), write(' no pertenece a '), write(B). 

conectados(A,B) :- pertenece(A,B).
conectados(A,B) :-
	pertenece(A,C),
	pertenece(C,B).

conectados(A,B) :-
	pertenece(A,C),
	pertenece(C,D),
	pertenece(D,B).

conectados(A,B) :-
	pertenece(A,C),
	pertenece(C,D),
	pertenece(D,E),
	pertenece(E,B).

conectados(A,B) :-
	pertenece(A,C),
	pertenece(C,D),
	pertenece(D,E),
	pertenece(E,F),
	pertenece(F,B).

conectados(A,B) :-
	pertenece(A,C),
	pertenece(C,D),
	pertenece(D,E),
	pertenece(E,F),
	pertenece(F,G),
	pertenece(G,B).