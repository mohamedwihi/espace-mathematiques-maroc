---
id: tc-geometrie-espace
titre: Géométrie dans l’espace
niveau: tc
semestre: 2
duree: 12 heures
---

## Objectifs
- Connaître les axiomes de l’espace et les différentes façons de déterminer un plan.
- Étudier les positions relatives de droites et de plans.
- Connaître et utiliser les propriétés du parallélisme et de l’orthogonalité dans l’espace.
- Calculer les aires et les volumes des solides usuels.

## Prérequis
- Géométrie dans l’espace (3AC).
- Théorèmes de Pythagore et de Thalès.
- Solides usuels.

# I. Axiomes de l’espace

:::propriete Axiomes
1. Par deux points distincts $A$ et $B$ passe une **seule droite**, notée $(AB)$.
2. Par trois points **non alignés** $A$, $B$, $C$ passe un **seul plan**, noté $(ABC)$.
3. Si deux points distincts $A$ et $B$ appartiennent à un plan $(P)$, alors la droite $(AB)$ est **incluse** dans $(P)$.
4. Si deux plans distincts ont un point commun, alors leur intersection est une **droite**.
5. Dans chaque plan de l’espace, toutes les propriétés de la géométrie plane sont valables.
:::

:::propriete Déterminer un plan
Un plan est déterminé par :
- trois points non alignés ;
- une droite et un point n’appartenant pas à cette droite ;
- deux droites sécantes ;
- deux droites strictement parallèles.
:::

# II. Positions relatives

## 1. Deux droites

:::propriete
Deux droites $(D)$ et $(D')$ de l’espace sont :
- **coplanaires** (contenues dans un même plan) : elles sont alors sécantes, strictement parallèles ou confondues ;
- ou **non coplanaires** : elles n’ont aucun point commun et ne sont pas parallèles.
:::

## 2. Une droite et un plan

:::propriete
Une droite $(D)$ et un plan $(P)$ peuvent être : $(D)$ **incluse** dans $(P)$ ; $(D)$ **sécante** à $(P)$ en un seul point ; $(D)$ **strictement parallèle** à $(P)$ (aucun point commun).
:::

## 3. Deux plans

:::propriete
Deux plans $(P)$ et $(P')$ peuvent être : **confondus** ; **strictement parallèles** (aucun point commun) ; **sécants** suivant une droite.
:::

```figure
{"type":"geometry","x":[-0.5,6.5],"y":[-0.5,6.2],"width":300,
 "polygons":[{"points":[[0,0],[4,0],[4,4],[0,4]],"color":"brand","fill":false}],
 "segments":[{"from":[0,4],"to":[1.8,5.8]},{"from":[4,4],"to":[5.8,5.8]},{"from":[4,0],"to":[5.8,1.8]},{"from":[5.8,1.8],"to":[5.8,5.8]},{"from":[1.8,5.8],"to":[5.8,5.8]},
   {"from":[0,0],"to":[1.8,1.8],"dashed":true},{"from":[1.8,1.8],"to":[5.8,1.8],"dashed":true},{"from":[1.8,1.8],"to":[1.8,5.8],"dashed":true}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":4,"y":0,"label":"B"},{"x":5.8,"y":1.8,"label":"C"},{"x":1.8,"y":1.8,"label":"D"},{"x":0,"y":4,"label":"E"},{"x":4,"y":4,"label":"F"},{"x":5.8,"y":5.8,"label":"G"},{"x":1.8,"y":5.8,"label":"H"}],
 "caption":"Dans le cube $ABCDEFGH$ : $(AB)$ et $(CG)$ sont non coplanaires ; $(EF)$ est parallèle au plan $(ABC)$ ; les plans $(ABC)$ et $(BCG)$ sont sécants suivant $(BC)$."}
```

# III. Parallélisme dans l’espace

:::propriete Droites parallèles
- Deux droites parallèles à une même troisième sont parallèles entre elles.
- Si deux plans sécants contiennent respectivement deux droites parallèles, leur intersection est parallèle à ces droites (**théorème du toit**).
:::

:::propriete Droite parallèle à un plan
Une droite $(D)$ est parallèle à un plan $(P)$ si et seulement si elle est parallèle à une droite de $(P)$.
:::

:::propriete Plans parallèles
- Si un plan $(P)$ contient deux droites **sécantes** parallèles à un plan $(P')$, alors $(P)\parallel(P')$.
- Deux plans parallèles à un même troisième sont parallèles.
- Si deux plans sont parallèles, tout plan qui coupe l’un coupe l’autre, et les droites d’intersection sont parallèles.
- Si deux plans sont parallèles, toute droite qui coupe l’un coupe l’autre.
:::

# IV. Orthogonalité dans l’espace

:::definition
- Deux droites sont **orthogonales** si leurs parallèles menées par un même point sont perpendiculaires.
- Une droite $(D)$ est **orthogonale** (perpendiculaire) à un plan $(P)$ si elle est orthogonale à **toutes** les droites de $(P)$.
:::

:::theoreme
Une droite est orthogonale à un plan si et seulement si elle est orthogonale à **deux droites sécantes** de ce plan.
:::

:::propriete
- Par un point donné, il passe un seul plan orthogonal à une droite donnée, et une seule droite orthogonale à un plan donné.
- Si deux droites sont parallèles, tout plan orthogonal à l’une est orthogonal à l’autre.
- Deux droites orthogonales à un même plan sont parallèles.
- Deux plans orthogonaux à une même droite sont parallèles.
:::

:::exemple
Dans le cube $ABCDEFGH$ : $(AE)\perp(AB)$ et $(AE)\perp(AD)$, deux droites sécantes du plan $(ABC)$, donc $(AE)\perp(ABC)$. Par suite $(AE)$ est orthogonale à $(BD)$ et à $(AC)$. Comme $(BD)\perp(AC)$ (diagonales du carré) et $(BD)\perp(AE)$, on obtient $(BD)\perp(ACE)$, donc $(BD)\perp(CE)$.
:::

# V. Aires et volumes des solides usuels

:::propriete
| Solide | Aire latérale | Volume |
|---|---|---|
| Cube d’arête $a$ | $4a^2$ | $a^3$ |
| Pavé droit $L\times\ell\times h$ | $2(L+\ell)h$ | $L\ell h$ |
| Prisme droit (périmètre de base $p$, aire de base $B$, hauteur $h$) | $ph$ | $Bh$ |
| Cylindre (rayon $r$, hauteur $h$) | $2\pi rh$ | $\pi r^2h$ |
| Pyramide (aire de base $B$, hauteur $h$) | somme des faces latérales | $\dfrac13Bh$ |
| Cône (rayon $r$, génératrice $g$, hauteur $h$) | $\pi rg$ | $\dfrac13\pi r^2h$ |
| Sphère et boule (rayon $r$) | $4\pi r^2$ | $\dfrac43\pi r^3$ |
:::

:::exemple
Un cône a pour rayon $3$ cm et hauteur $4$ cm. Sa génératrice vaut $g=\sqrt{9+16}=5$ cm ; son aire latérale est $\pi\times3\times5=15\pi\ \text{cm}^2$ et son volume $\dfrac13\pi\times9\times4=12\pi\ \text{cm}^3$.
:::

# Exercices

:::exercice Positions relatives
Dans le cube $ABCDEFGH$, préciser la position relative de : $(AB)$ et $(HG)$ ; $(AE)$ et $(BC)$ ; $(EG)$ et le plan $(ABC)$ ; les plans $(ABF)$ et $(DCG)$ ; les plans $(ABG)$ et $(EFG)$.
:::

:::exercice Intersection de plans
$SABCD$ est une pyramide dont la base $ABCD$ est un parallélogramme. Déterminer l’intersection des plans $(SAB)$ et $(SCD)$.
:::

:::exercice Orthogonalité
$ABCD$ est un tétraèdre tel que $(AD)\perp(ABC)$ et le triangle $ABC$ est rectangle en $B$. Montrer que $(BC)\perp(ABD)$, puis que le triangle $BCD$ est rectangle en $B$.
:::

:::exercice Volumes
Une boîte de conserve cylindrique a un diamètre de $8$ cm et une hauteur de $11$ cm. Calculer son volume en litres et l’aire de métal nécessaire (aire latérale et deux disques).
:::

:::exercice Pyramide
Une pyramide régulière à base carrée a pour côté de base $6$ cm et pour hauteur $4$ cm. Calculer son volume et la hauteur de chacune de ses faces latérales.
:::

# Corrigés

:::corrige
- $(AB)\parallel(HG)$ (car $(AB)\parallel(DC)\parallel(HG)$).
- $(AE)$ et $(BC)$ : non coplanaires (et orthogonales).
- $(EG)\parallel(ABC)$ car $(EG)\parallel(AC)$.
- $(ABF)\parallel(DCG)$ : faces opposées du cube.
- $(ABG)$ et $(EFG)$ sont sécants suivant $(HG)$ : le plan $(ABG)$ contient $(AB)$ et donc la parallèle $(HG)$ passant par $G$.
:::

:::corrige
Les plans sont sécants (ils ont $S$ en commun et sont distincts). $(AB)\subset(SAB)$, $(CD)\subset(SCD)$ et $(AB)\parallel(CD)$ : d’après le théorème du toit, l’intersection est la droite passant par $S$ et parallèle à $(AB)$.
:::

:::corrige
$(AD)\perp(ABC)$ donc $(AD)\perp(BC)$. De plus $(AB)\perp(BC)$. Ainsi $(BC)$ est orthogonale à deux droites sécantes de $(ABD)$ : $(BC)\perp(ABD)$. Par suite $(BC)\perp(BD)$ et $BCD$ est rectangle en $B$.
:::

:::corrige
$r=4$ cm : $V=\pi\times16\times11=176\pi\approx552{,}9\ \text{cm}^3\approx0{,}553$ L. Aire : $2\pi\times4\times11+2\times\pi\times16=88\pi+32\pi=120\pi\approx377\ \text{cm}^2$.
:::

:::corrige
$V=\dfrac13\times36\times4=48\ \text{cm}^3$. La hauteur d’une face latérale relie le sommet au milieu d’un côté de la base, à $3$ cm du centre : $\sqrt{4^2+3^2}=5$ cm.
:::
