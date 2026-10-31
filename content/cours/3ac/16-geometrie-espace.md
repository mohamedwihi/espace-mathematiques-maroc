---
id: 3ac-geometrie-espace
titre: Géométrie dans l’espace
niveau: 3ac
semestre: 2
duree: 10 heures
---

## Objectifs
- Reconnaître des droites et des plans parallèles ou orthogonaux dans les solides usuels.
- Utiliser les théorèmes de Pythagore et de Thalès dans l’espace.
- Connaître l’effet d’un agrandissement ou d’une réduction sur les longueurs, les aires et les volumes.
- Calculer des aires et des volumes de solides usuels.

## Prérequis
- Solides usuels : cube, pavé droit, prisme, cylindre, pyramide, cône, sphère.
- Théorèmes de Pythagore et de Thalès dans le plan.
- Triangles semblables.

# I. Orthogonalité dans l’espace

:::definition
- Une droite $(D)$ est **perpendiculaire** à un plan $(P)$ en un point $A$ si elle est perpendiculaire à **deux droites sécantes** de $(P)$ passant par $A$. Elle est alors perpendiculaire à toutes les droites de $(P)$ passant par $A$.
- Deux droites de l’espace sont **orthogonales** si leurs parallèles menées par un même point sont perpendiculaires (elles ne sont pas forcément sécantes).
:::

```figure
{"type":"geometry","x":[-0.5,6.5],"y":[-0.5,6.2],"width":300,
 "polygons":[{"points":[[0,0],[4,0],[4,4],[0,4]],"color":"brand","fill":false}],
 "segments":[{"from":[0,4],"to":[1.8,5.8]},{"from":[4,4],"to":[5.8,5.8]},{"from":[4,0],"to":[5.8,1.8]},{"from":[5.8,1.8],"to":[5.8,5.8]},{"from":[1.8,5.8],"to":[5.8,5.8]},
   {"from":[0,0],"to":[1.8,1.8],"dashed":true},{"from":[1.8,1.8],"to":[5.8,1.8],"dashed":true},{"from":[1.8,1.8],"to":[1.8,5.8],"dashed":true}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":4,"y":0,"label":"B"},{"x":5.8,"y":1.8,"label":"C"},{"x":1.8,"y":1.8,"label":"D"},{"x":0,"y":4,"label":"E"},{"x":4,"y":4,"label":"F"},{"x":5.8,"y":5.8,"label":"G"},{"x":1.8,"y":5.8,"label":"H"}],
 "caption":"Cube $ABCDEFGH$ (base $ABCD$, arêtes verticales $[AE]$, $[BF]$, $[CG]$, $[DH]$)."}
```

:::exemple
Dans le cube $ABCDEFGH$ :
- $(AE)$ est perpendiculaire à $(AB)$ et à $(AD)$, deux droites sécantes du plan $(ABC)$ : donc $(AE)\perp(ABC)$.
- Par conséquent $(AE)$ est perpendiculaire à $(AC)$, et le triangle $EAC$ est rectangle en $A$.
- $(AE)$ et $(BC)$ ne sont pas sécantes, mais $(BF)\parallel(AE)$ et $(BF)\perp(BC)$ : $(AE)$ et $(BC)$ sont orthogonales.
:::

# II. Parallélisme dans l’espace

:::propriete
- Deux droites parallèles à une même droite sont parallèles entre elles.
- Si une droite est parallèle à une droite d’un plan, elle est parallèle à ce plan.
- Deux plans perpendiculaires à une même droite sont parallèles.
:::

:::exemple
Dans le cube : $(EF)\parallel(AB)$ et $(AB)\parallel(DC)$, donc $(EF)\parallel(DC)$. Les faces $(ABC)$ et $(EFG)$ sont toutes deux perpendiculaires à $(AE)$ : elles sont parallèles.
:::

# III. Théorème de Pythagore dans l’espace

:::methode
Pour calculer une longueur dans un solide, on repère un **triangle rectangle** qui contient cette longueur (souvent grâce à une droite perpendiculaire à un plan), puis on applique le théorème de Pythagore (ou sa réciproque) dans ce triangle.
:::

:::exemple Diagonale d’un pavé droit
Un pavé droit $ABCDEFGH$ a pour dimensions $AB=4$, $AD=3$ et $AE=12$.
- Dans $ABC$ rectangle en $B$ : $AC^2=AB^2+BC^2=16+9=25$, donc $AC=5$.
- $(CG)\perp(ABC)$, donc $ACG$ est rectangle en $C$ : $AG^2=AC^2+CG^2=25+144=169$, donc $AG=13$.

Plus généralement, la diagonale d’un pavé de dimensions $a$, $b$, $c$ vaut $\sqrt{a^2+b^2+c^2}$ ; celle d’un cube d’arête $a$ vaut $a\sqrt3$.
:::

# IV. Théorème de Thalès dans l’espace

:::propriete
Le théorème de Thalès et sa réciproque s’appliquent dans **tout plan** de l’espace. En particulier, la section d’une pyramide ou d’un cône par un plan **parallèle à la base** est une **réduction** de la base.
:::

:::exemple
Une pyramide $SABCD$ de hauteur $SO=9$ est coupée par un plan parallèle à la base, à $3$ cm du sommet $S$. La section $A'B'C'D'$ est une réduction de $ABCD$ de rapport $k=\dfrac{SO'}{SO}=\dfrac39=\dfrac13$. Si $AB=6$, alors $A'B'=2$.
:::

# V. Agrandissement et réduction

:::propriete
Dans un agrandissement ou une réduction de rapport $k$ :
- les **longueurs** sont multipliées par $k$ ;
- les **aires** sont multipliées par $k^2$ ;
- les **volumes** sont multipliés par $k^3$ ;
- les angles et le parallélisme sont conservés.
:::

:::exemple
Dans l’exemple de la pyramide ($k=\dfrac13$), si le volume de la grande pyramide est $108\ \text{cm}^3$, celui de la petite pyramide est $108\times\left(\dfrac13\right)^3=4\ \text{cm}^3$.
:::

# VI. Aires et volumes des solides usuels

:::propriete
| Solide | Aire latérale | Volume |
|---|---|---|
| Cube d’arête $a$ | $4a^2$ (totale : $6a^2$) | $a^3$ |
| Pavé droit $L\times\ell\times h$ | $2(L+\ell)h$ | $L\ell h$ |
| Prisme droit (base $B$, périmètre $p$, hauteur $h$) | $p\times h$ | $B\times h$ |
| Cylindre (rayon $r$, hauteur $h$) | $2\pi rh$ | $\pi r^2h$ |
| Pyramide (base $B$, hauteur $h$) | somme des faces | $\dfrac13B\times h$ |
| Cône (rayon $r$, hauteur $h$) | — | $\dfrac13\pi r^2h$ |
| Sphère / boule (rayon $r$) | $4\pi r^2$ | $\dfrac43\pi r^3$ |
:::

:::exemple
Un cylindre de rayon $3$ cm et de hauteur $10$ cm a pour volume $\pi\times3^2\times10=90\pi\approx282{,}7\ \text{cm}^3$ et pour aire latérale $2\pi\times3\times10=60\pi\approx188{,}5\ \text{cm}^2$.
:::

:::remarque
Pour convertir : $1\ \text{dm}^3=1\ \text{L}$ et $1\ \text{m}^3=1000\ \text{L}$.
:::

# Exercices

:::exercice Dans un cube
$ABCDEFGH$ est un cube d’arête $4$ cm.
1. Justifier que le triangle $ACG$ est rectangle en $C$.
2. Calculer $AC$ puis $AG$ (valeurs exactes).
:::

:::exercice Pavé droit
Un pavé droit a pour dimensions $6$ cm, $8$ cm et $5$ cm. Calculer sa grande diagonale, son volume et son aire totale.
:::

:::exercice Pyramide
Une pyramide régulière $SABCD$ a une base carrée de côté $6$ cm et une hauteur $SO=4$ cm.
1. Calculer son volume.
2. On la coupe par un plan parallèle à la base, au milieu de la hauteur. Calculer le côté de la section et le volume de la petite pyramide.
:::

:::exercice Cône
Un cône a pour rayon de base $3$ cm et pour génératrice $5$ cm. Calculer sa hauteur puis son volume (valeur exacte et arrondi au dixième).
:::

:::exercice Agrandissement
Une boule de rayon $2$ cm est agrandie pour obtenir une boule de rayon $6$ cm. Par combien sont multipliés son aire et son volume ? Calculer le volume de la grande boule.
:::

:::exercice Série — pyramide
$SABCD$ est une pyramide régulière de base le carré $ABCD$ de côté $6$ cm et de hauteur $SO=4$ cm ($O$ centre du carré).
1. Calculer le volume de la pyramide.
2. Soit $I$ le milieu de $[BC]$ : calculer $SI$ (on remarquera que $OI=3$ cm).
3. En déduire l’aire latérale de la pyramide.
:::

:::exercice Série — section et réduction
Un cône de révolution a pour hauteur $12$ cm et pour rayon de base $5$ cm. On le coupe par un plan parallèle à la base, à $4$ cm du sommet.
1. Calculer le volume du grand cône ($\pi\approx3{,}14$).
2. Le petit cône obtenu est une réduction du grand : donner le coefficient puis son volume.
:::

:::exercice Approfondissement — cône et boule
Un cône de révolution a pour hauteur $SO=12$ cm et pour rayon de base $OA=5$ cm.
1. Calculer la génératrice $SA$.
2. Calculer le volume du cône (valeur exacte en fonction de $\pi$).
3. Une boule a le même volume que ce cône. Calculer son rayon (au mm près ; $V=\dfrac43\pi R^3$).
:::

:::exercice Approfondissement — section d’un pavé
$ABCDEFGH$ est un pavé droit avec $AB=8$, $AD=6$, $AE=5$ (cm). On le coupe par le plan qui passe par $A$, $C$, $G$ et $E$.
1. Quelle est la nature de la section $ACGE$ ? Justifier.
2. Calculer ses dimensions et son aire.
:::

# Corrigés

:::corrige
1. $(CG)$ est perpendiculaire au plan $(ABC)$, donc à la droite $(AC)$ de ce plan : $ACG$ est rectangle en $C$.
2. $AC^2=4^2+4^2=32$, $AC=4\sqrt2$ cm ; $AG^2=AC^2+CG^2=32+16=48$, $AG=\sqrt{48}=4\sqrt3$ cm.
:::

:::corrige
Diagonale : $\sqrt{36+64+25}=\sqrt{125}=5\sqrt5\approx11{,}2$ cm. Volume : $6\times8\times5=240\ \text{cm}^3$. Aire totale : $2(48+30+40)=236\ \text{cm}^2$.
:::

:::corrige
1. $V=\dfrac13\times36\times4=48\ \text{cm}^3$.
2. Rapport de réduction $k=\dfrac12$ : côté de la section $3$ cm ; volume $48\times\left(\dfrac12\right)^3=6\ \text{cm}^3$.
:::

:::corrige
La hauteur, le rayon et la génératrice forment un triangle rectangle : $h^2=5^2-3^2=16$, $h=4$ cm. $V=\dfrac13\pi\times9\times4=12\pi\approx37{,}7\ \text{cm}^3$.
:::

:::corrige
Rapport $k=3$ : l’aire est multipliée par $9$ et le volume par $27$. Volume de la grande boule : $\dfrac43\pi\times6^3=288\pi\approx904{,}8\ \text{cm}^3$.
:::

:::corrige
1. $V=\dfrac{6^2\times4}{3}=48\ \text{cm}^3$.
2. $SOI$ est rectangle en $O$ : $SI^2=16+9=25$, $SI=5$ cm.
3. Chaque face est un triangle de base $6$ et de hauteur $SI=5$ : $\mathcal A_\ell=4\times\dfrac{6\times5}{2}=60\ \text{cm}^2$.
:::

:::corrige
1. $V=\dfrac{3{,}14\times25\times12}{3}=314\ \text{cm}^3$.
2. $k=\dfrac4{12}=\dfrac13$ ; $V'=k^3V=\dfrac{314}{27}\approx11{,}6\ \text{cm}^3$.
:::

:::corrige
1. $SA^2=144+25=169$, $SA=13$ cm.
2. $V=\dfrac{\pi\times25\times12}{3}=100\pi\ \text{cm}^3$.
3. $\dfrac43\pi R^3=100\pi\iff R^3=75\iff R\approx4{,}2$ cm.
:::

:::corrige
1. $(AE)$ est perpendiculaire à la base, donc à $(AC)$ ; $AE=CG$ et $(AE)\parallel(CG)$ : $ACGE$ est un rectangle.
2. $AC=\sqrt{64+36}=10$ cm et $AE=5$ cm : aire $50\ \text{cm}^2$.
:::
