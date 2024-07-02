#include <iostream>
using namespace std;

class Instrument {
   public:
    virtual void makeSound() = 0;  // pure virtual function
    // { cout << "Wee Wee Wee..." << endl; }
};

class Accordion : public Instrument {
   public:
    void makeSound() { cout << "Ooo Ooo Ooo..." << endl; }
};

class Piano : public Instrument {
    void makeSound() { cout << "Ding Ding Ding..." << endl; }
};

int main() {
    Instrument* accordion = new Accordion();
    accordion->makeSound();

    // Instrument* instrument = new Instrument();
    // instrument->makeSound();

    Instrument* piano = new Piano();
    piano->makeSound();

    system("pause>0");
}