---
id: tc-statistiques
titre: Statistiques
niveau: tc
semestre: 2
duree: 10 heures
---

## Objectifs
- Maîtriser le vocabulaire statistique : population, caractère, effectif, fréquence, effectifs et fréquences cumulés.
- Organiser une série discrète ou regroupée en classes.
- Représenter une série : diagramme en bâtons, en bandes, circulaire, histogramme, polygone.
- Calculer les paramètres de position (mode, moyenne, médiane) et de dispersion (étendue, variance, écart-type, écart moyen).

## Prérequis
- Statistique (3AC).
- Pourcentages.
- Racines carrées.

# I. Terminologie

:::vocabulaire
- **Population** : ensemble étudié ; **individu** (ou unité statistique) : chaque élément.
- **Caractère** : propriété étudiée, **qualitatif** ou **quantitatif** ; un caractère quantitatif est **discret** (valeurs isolées) ou **continu** (valeurs regroupées en **classes** $[a;b[$).
- **Effectif** $n_i$ d’une valeur $x_i$ ; **effectif total** $N=\sum n_i$.
- **Fréquence** : $f_i=\dfrac{n_i}{N}$ ; on a $\sum f_i=1$.
- **Effectif cumulé croissant** (ECC) de $x_i$ : somme des effectifs des valeurs inférieures ou égales à $x_i$ ; de même pour la **fréquence cumulée**.
- Pour une classe $[a;b[$ : le **centre** est $\dfrac{a+b}2$ et l’**amplitude** est $b-a$.
:::

:::exemple
Notes de $25$ élèves :
| Note $x_i$ | $8$ | $10$ | $12$ | $14$ | $16$ |
|---|---|---|---|---|---|
| Effectif $n_i$ | $3$ | $6$ | $8$ | $5$ | $3$ |
| ECC | $3$ | $9$ | $17$ | $22$ | $25$ |
| Fréquence $f_i$ | $0{,}12$ | $0{,}24$ | $0{,}32$ | $0{,}20$ | $0{,}12$ |
:::

# II. Représentations graphiques

:::propriete
- **Diagramme en bâtons** (caractère discret) : un bâton de hauteur proportionnelle à $n_i$ (ou $f_i$) pour chaque valeur ; en reliant les sommets, on obtient le **polygone des effectifs**.
- **Diagramme en bandes** : bandes de longueurs proportionnelles aux effectifs (souvent pour un caractère qualitatif).
- **Diagramme circulaire** : secteurs d’angle $\alpha_i=f_i\times360^\circ$.
- **Histogramme** (caractère continu) : des rectangles juxtaposés de base la classe et d’**aire** proportionnelle à l’effectif (si les classes ont la même amplitude, la hauteur est proportionnelle à l’effectif). En joignant les milieux des côtés supérieurs, on obtient le polygone.
:::

```figure
{"type":"graph","x":[0,52],"y":[0,13],"width":360,
 "polygons":[{"points":[[10,0],[20,0],[20,4],[10,4]],"color":"brand"},{"points":[[20,0],[30,0],[30,10],[20,10]],"color":"brand"},{"points":[[30,0],[40,0],[40,12],[30,12]],"color":"brand"},{"points":[[40,0],[50,0],[50,4],[40,4]],"color":"brand"}],
 "caption":"Histogramme des effectifs d’une série en classes de même amplitude $10$ : $[10;20[$, $[20;30[$, $[30;40[$, $[40;50[$."}
```

# III. Paramètres de position

:::definition
- Le **mode** est la valeur (ou la **classe modale**) de plus grand effectif.
- La **moyenne** est $\bar x=\dfrac{\sum n_ix_i}{N}=\sum f_ix_i$ ; pour une série en classes, $x_i$ désigne le **centre** de chaque classe.
- La **médiane** $Me$ partage la série ordonnée en deux parties de même effectif.
:::

:::exemple
Pour les notes : mode $12$ ; $\bar x=\dfrac{24+60+96+70+48}{25}=\dfrac{298}{25}=11{,}92$. $N=25$ est impair : la médiane est la $13^{\text{e}}$ valeur ; d’après les ECC ($9$ puis $17$), $Me=12$.
:::

:::methode Médiane d’une série en classes
On repère la classe $[a;b[$ qui contient la valeur de rang $\dfrac N2$ (à l’aide des ECC), puis on suppose les valeurs régulièrement réparties dans la classe : si $E$ est l’ECC avant cette classe et $n$ son effectif,
$$Me=a+(b-a)\times\frac{\frac N2-E}{n}.$$
:::

# IV. Paramètres de dispersion

:::definition
- **Étendue** : différence entre la plus grande et la plus petite valeur.
- **Variance** : $V=\dfrac1N\sum n_i\left(x_i-\bar x\right)^2=\dfrac1N\sum n_ix_i^2-\bar x^2$.
- **Écart-type** : $\sigma=\sqrt V$.
- **Écart moyen** : $e=\dfrac1N\sum n_i\left|x_i-\bar x\right|$.
:::

:::remarque
Plus l’écart-type est petit, plus les valeurs sont **regroupées autour de la moyenne**. L’écart-type a la même unité que les valeurs.
:::

:::exemple
Série : $2$ ; $4$ ; $6$ ; $8$ ($N=4$). $\bar x=5$. $V=\dfrac{4+16+36+64}{4}-25=30-25=5$, donc $\sigma=\sqrt5\approx2{,}24$. Écart moyen : $e=\dfrac{3+1+1+3}4=2$.
:::

# Exercices

:::exercice Série discrète
On a relevé le nombre d’enfants de $40$ familles :
| Enfants | $0$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|---|
| Familles | $4$ | $8$ | $14$ | $10$ | $4$ |

1. Calculer les fréquences et les effectifs cumulés croissants.
2. Déterminer le mode, la moyenne et la médiane.
3. Calculer la variance et l’écart-type.
:::

:::exercice Série en classes
Durées (en minutes) d’un trajet pour $50$ élèves :
| Classe | $[0;10[$ | $[10;20[$ | $[20;30[$ | $[30;40[$ |
|---|---|---|---|---|
| Effectif | $8$ | $17$ | $15$ | $10$ |

1. Déterminer la classe modale.
2. Calculer la moyenne à l’aide des centres des classes.
3. Estimer la médiane.
:::

:::exercice Diagramme circulaire
Dans un lycée de $600$ élèves, $270$ sont en sciences, $180$ en lettres et le reste en technique. Calculer les angles du diagramme circulaire.
:::

:::exercice Comparer deux séries
Deux classes ont obtenu les moyennes et écarts-types suivants : classe A, $\bar x=11$, $\sigma=1{,}5$ ; classe B, $\bar x=11$, $\sigma=4$. Comparer ces deux classes.
:::

:::exercice Série — séries groupées en classes
Le temps (en minutes) passé par $50$ élèves pour aller au lycée :
| Classe | $[0;10[$ | $[10;20[$ | $[20;30[$ | $[30;40[$ |
|---|---|---|---|---|
| Effectif | $12$ | $20$ | $13$ | $5$ |
1. Calculer la moyenne à l’aide des centres des classes.
2. Déterminer la classe modale et la classe médiane.
:::

:::exercice Série — écart-type
Calculer la moyenne, la variance et l’écart-type de la série : $8$ ; $10$ ; $12$ ; $14$ ; $16$.
:::

:::exercice Approfondissement — effet d’une transformation
Une série a pour moyenne $\bar x=12$ et écart-type $\sigma=3$. On transforme chaque valeur par $y=2x-5$.
1. Calculer la moyenne et l’écart-type de la nouvelle série.
2. Quelle transformation affine faut-il appliquer pour obtenir une série de moyenne $10$ et d’écart-type $2$ ?
:::

:::exercice Approfondissement — formule de König
Montrer que la variance d’une série $x_1,\ldots,x_n$ vérifie $V=\dfrac{1}{n}\sum x_i^2-\bar x^2$, puis l’utiliser pour la série $2$ ; $4$ ; $4$ ; $5$ ; $10$.
:::

# Corrigés

:::corrige
1. Fréquences : $0{,}1$ ; $0{,}2$ ; $0{,}35$ ; $0{,}25$ ; $0{,}1$. ECC : $4$ ; $12$ ; $26$ ; $36$ ; $40$.
2. Mode : $2$. $\bar x=\dfrac{0+8+28+30+16}{40}=\dfrac{82}{40}=2{,}05$. $N=40$ : on prend la moyenne des $20^{\text{e}}$ et $21^{\text{e}}$ valeurs, toutes deux égales à $2$ : $Me=2$.
3. $\dfrac1N\sum n_ix_i^2=\dfrac{0+8+56+90+64}{40}=\dfrac{218}{40}=5{,}45$, donc $V=5{,}45-2{,}05^2=5{,}45-4{,}2025=1{,}2475$ et $\sigma\approx1{,}12$.
:::

:::corrige
1. Classe modale : $[10;20[$.
2. Centres $5$ ; $15$ ; $25$ ; $35$ : $\bar x=\dfrac{40+255+375+350}{50}=\dfrac{1020}{50}=20{,}4$ min.
3. ECC : $8$ ; $25$ ; $40$ ; $50$. La $25^{\text{e}}$ valeur ($\frac N2=25$) termine la classe $[10;20[$ : $Me=10+10\times\dfrac{25-8}{17}=20$ min.
:::

:::corrige
Technique : $150$ élèves. Angles : sciences $\dfrac{270}{600}\times360^\circ=162^\circ$ ; lettres $108^\circ$ ; technique $90^\circ$.
:::

:::corrige
Même moyenne, mais l’écart-type de la classe A est bien plus petit : ses notes sont plus homogènes, regroupées autour de $11$ ; celles de la classe B sont beaucoup plus dispersées.
:::

:::corrige
1. Centres $5$, $15$, $25$, $35$ : $\bar x=\dfrac{60+300+325+175}{50}=\dfrac{860}{50}=17{,}2$ min.
2. Classe modale $[10;20[$ ; effectifs cumulés $12$, $32$… : la $25^{\text{e}}$ valeur est dans $[10;20[$, classe médiane.
:::

:::corrige
$\bar x=12$ ; $V=\dfrac{16+4+0+4+16}{5}=8$ ; $\sigma=\sqrt8=2\sqrt2\approx2{,}83$.
:::

:::corrige
1. $\bar y=2\times12-5=19$ et $\sigma_y=2\times3=6$.
2. $y=ax+b$ avec $\lvert a\rvert\times3=2$, soit $a=\dfrac23$, et $\dfrac23\times12+b=10$, $b=2$ : $y=\dfrac23x+2$.
:::

:::corrige
$V=\dfrac1n\sum(x_i-\bar x)^2=\dfrac1n\sum x_i^2-2\bar x\times\dfrac1n\sum x_i+\bar x^2=\dfrac1n\sum x_i^2-\bar x^2$. Ici $\bar x=5$ et $\dfrac{4+16+16+25+100}{5}=32{,}2$, donc $V=32{,}2-25=7{,}2$.
:::
