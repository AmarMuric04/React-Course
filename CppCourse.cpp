#include <iostream>
using namespace std;

class Smartphone {
   public:
    virtual void takeASelife() = 0;
};

class Android : public Smartphone {
   public:
    void takeASelife() { cout << "Selfie taken using an Android" };
};

int main()

{
    Smartphone* Samsung = new Android;

    Samsung->takeASelife()

        system("pause>0");
}
