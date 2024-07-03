#include <iostream>
using namespace std;

class Smartphone {
   public:
    virtual void takeASelfie() = 0;
    virtual void makeACall(string receiver) = 0;
};

class Android : public Smartphone {
   public:
    void takeASelfie() { cout << "Selfie taken using an Android" << endl; };
    void makeACall(string receiver) { cout << "The Android is calling " << receiver << endl; };
};

class Iphone : public Smartphone {
   public:
    void takeASelfie() { cout << "Selfie taken using an Iphone" << endl; }
    void makeACall(string receiver) { cout << "The Iphone is calling " << receiver << endl; };
};

int main()

{
    Smartphone* Samsung = new Android;
    Smartphone* Imac = new Iphone;

    Imac->takeASelfie();
    Samsung->takeASelfie();
    Samsung->makeACall("Murga");

    system("pause>0");
}
