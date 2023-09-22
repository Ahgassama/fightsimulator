class Personnage {
  constructor(pseudo, classe, sante, attaque) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;
  }
  get informations() {
    return (
      this.pseudo +
      " " +
      "a" +
      this.sante +
      " " +
      "points de vie et est au niveau" +
      " " +
      this.niveau
    );
  }
  evoluer() {
    this.niveau++;
    console.log(this.pseudo + " " + "passe au niveau" + " " + this.niveau);
  }
  verifiSanter() {
    if (this.sante <= 0) {
      this.sante == 0;
    }
    console.log(this.pseudo + " " + "a perdu");
  }
}

class Magicien extends Personnage {
  constructor(pseudo) {
    super(pseudo, "magicien", 170, 90);
  }

  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        " " +
        "attaque" +
        " " +
        personnage.pseudo +
        " " +
        "en lançant un sort " +
        " " +
        this.attaque +
        " " +
        " dégâts"
    );
    this.evoluer();
    personnage.verifiSanter();
  }
  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " " +
        "attaque avec son coup spécial puissance des arcanes" +
        " " +
        personnage.pseudo +
        " " +
        this.attaque +
        " " +
        " dégâts"
    );
    this.evoluer();
    personnage.verifiSanter();
  }
}

class Guerrier extends Personnage {
  constructor(pseudo) {
    super(pseudo, "guerrier", 350, 50);
  }
  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        " " +
        "attaque " +
        " " +
        personnage.pseudo +
        " " +
        "avec son épée" +
        " " +
        this.attaque +
        " " +
        " dégâts"
    );
    this.evoluer();
    personnage.verifiSanter();
  }
  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " " +
        "attaque avec son coup spécial haches de guerre" +
        " " +
        personnage.pseudo +
        " " +
        this.attaque +
        " " +
        " dégâts"
    );
    this.evoluer();
    personnage.verifiSanter();
  }
}
var gandalf = new Magicien("Gandalf");
var conan = new Guerrier("Conan");
console.log(conan.informations);
console.log(gandalf.informations);
gandalf.attaquer(conan);
console.log(conan.informations);
conan.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(conan);
