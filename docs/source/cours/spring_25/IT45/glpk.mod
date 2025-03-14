param nbr_prod := 2;
param nbr_composant := 3;
set PRODUITS := 1..nbr_prod;
set COMPO := 1..nbr_composant;

param gain(j in Produits);
param 

# s.t. = subject to = contrainte

s.t. composant_a: 2*x1 + 3*x2 <= 180;
s.t. composant_b: 2*x1 + 1*x2 <= 120;
s.t. composant_c: 1*x1 + 3*x2 <= 150;

# max z
maximize profit: 3*x1 + 4*x2;

solve;

printf "Solution optimale:\n";
printf "  Produits P1 à fabriquer: %g\n", x1;
printf "  Produits P2 à fabriquer: %g\n", x2;
printf "Bénéfice maximal: %g €\n", profit;

end;