=================
Test de Primalité
=================

.. contents::
   :depth: 2
   :local:

Cours : Test de Primalité
=========================

Le test de primalité permet de déterminer si un nombre est premier ou non. Dans cette section, nous allons aborder plusieurs méthodes pour tester la primalité d'un nombre : la méthode naïve, le test de Fermat et le test de Lucas-Lehmer. Chaque méthode a ses avantages et inconvénients, en fonction de la taille du nombre à tester.

---

1. Méthode naïve
----------------

La **méthode naïve** est la technique la plus simple pour tester si un nombre :math:`n` est premier. Elle consiste à vérifier si :math:`n` est divisible par l'un des entiers compris entre 2 et :math:`n - 1`. Si aucun entier ne divise :math:`n`, alors :math:`n` est premier. Cependant, cette méthode devient inefficace pour les grands nombres.

Optimisation de la méthode naïve :
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. **Vérification jusqu'à :math:`\sqrt{n}`** : Il suffit de tester les diviseurs jusqu'à :math:`\sqrt{n}` car si :math:`n` a un diviseur, alors l'un de ses diviseurs est nécessairement inférieur ou égal à :math:`\sqrt{n}`.
2. **Exclure les diviseurs pairs après 2** : Après avoir vérifié la divisibilité par 2, il suffit de tester les nombres impairs, car un nombre pair supérieur à 2 ne peut pas être premier.

**Complexité** : La méthode naïve a une complexité de :math:`O(\sqrt{n})`, ce qui est suffisant pour de petits nombres, mais devient inefficace pour les grands nombres.

**Exemple** :  
Testons si 47 est un nombre premier.
- On teste la divisibilité de 47 par les nombres premiers inférieurs ou égaux à :math:`\sqrt{47} \approx 6.86`, c’est-à-dire par 2, 3 et 5.
- 47 n'est pas divisible par 2 (47 est impair), ni par 3 (:math:`47/3 \approx 15.67`), ni par 5 (:math:`47/5 \approx 9.4`).
- Comme 47 n'est divisible par aucun de ces nombres, c'est un nombre premier.

---

2. Test de Fermat
-----------------

Le **Petit Théorème de Fermat** offre une méthode plus rapide pour tester la primalité d'un nombre. Il stipule que si :math:`p` est un nombre premier et que :math:`a` est un entier qui n'est pas divisible par :math:`p`, alors :

.. math::

   a^{p-1} \equiv 1 \pmod{p}

Le **test de Fermat** repose sur cette propriété. Pour tester si un nombre :math:`n` est premier :
1. Choisissez un entier :math:`a` tel que :math:`1 < a < n`.
2. Calculez :math:`a^{n-1} \mod n`.

- Si :math:`a^{n-1} \mod n \neq 1`, alors :math:`n` est **composite**.

- Si :math:`a^{n-1} \mod n = 1`, alors :math:`n` **peut** être premier, mais ce n'est pas garanti.

Limites du test de Fermat :
~~~~~~~~~~~~~~~~~~~~~~~~~~~

- Le test de Fermat peut donner de faux positifs pour certains nombres composites, appelés **pseudopremiers**.
- Les **nombres de Carmichael** sont des exemples particuliers de nombres composites qui passent le test de Fermat pour tous les choix de :math:`a`.

**Exemple** :  
Testons si 17 est un nombre premier en utilisant le test de Fermat avec :math:`a = 2`.
- Calculons :math:`2^{16} \mod 17`.


Utilisons l'exponentiation rapide :
  .. math::

     2^2 = 4, \quad 2^4 = 16, \quad 2^8 = 16^2 \mod 17 = 256 \mod 17 = 1, \quad 2^{16} = (2^8)^2 \mod 17 = 1

  Comme :math:`2^{16} \mod 17 = 1`, le test de Fermat ne rejette pas 17 comme premier, donc 17 est probablement premier.

---

3. Test de Lucas-Lehmer
-----------------------

Le **test de Lucas-Lehmer** est une méthode spécifique pour tester la primalité des **nombres de Mersenne**. Un **nombre de Mersenne** est un nombre de la forme :math:`M_p = 2^p - 1`, où :math:`p` est un entier naturel.

Le test de Lucas-Lehmer fonctionne uniquement pour ces nombres et est très efficace. Voici comment il fonctionne :

1. **Initialisation** : On commence par définir une suite récurrente :math:`u_n` telle que :math:`u_0 = 4`.
2. **Récurrence** : La suite :math:`u_n` est définie par la relation suivante :
   .. math::

      u_{n+1} = u_n^2 - 2
3. **Condition d'arrêt** : Si :math:`M_p = 2^p - 1` est un nombre de Mersenne, alors :math:`M_p` est premier si, et seulement si, :math:`u_{p-2} \equiv 0 \pmod{M_p}`.

**Exemple** :  
Testons si :math:`M_5 = 2^5 - 1 = 31` est un nombre premier.

1. Calculons la suite de Lucas-Lehmer pour :math:`p = 5` :
   - :math:`u_0 = 4`
   - :math:`u_1 = 4^2 - 2 = 14`
   - :math:`u_2 = 14^2 - 2 = 194`
   - :math:`u_3 = 194^2 - 2 = 37634`
2. Calculons :math:`u_3 \mod 31` :
   .. math::

      37634 \mod 31 = 0

   Comme :math:`u_3 \equiv 0 \mod 31`, le nombre :math:`M_5 = 31` est un nombre premier.

**Remarque** : Le test de Lucas-Lehmer est spécifiquement conçu pour les nombres de Mersenne. Il est beaucoup plus efficace que les autres tests pour ces nombres, même lorsqu'ils sont très grands.