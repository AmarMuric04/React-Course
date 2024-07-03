#include <iostream>
#include <list>
#include <string>
using namespace std;

struct YoutubeChannel {
    string Name;
    int SubscribersCount;

    YoutubeChannel(string name, int subscribersCount) {
        Name = name;
        SubscribersCount = subscribersCount;
    };

    bool operator==(const YoutubeChannel& channel) const { return this->Name == channel.Name; }
};

ostream& operator<<(ostream& COUT, YoutubeChannel& ytChannel) {
    COUT << "Name: " << ytChannel.Name << endl;
    COUT << "Subscribers: " << ytChannel.SubscribersCount << endl;

    return COUT;
};

struct MyCollection {
    list<YoutubeChannel> myChannels;

    void operator+=(YoutubeChannel& channelName) { this->myChannels.push_back(channelName); };
    void operator-=(YoutubeChannel& channelName) { this->myChannels.remove(channelName); };
};

ostream& operator<<(ostream& COUT, MyCollection& collection) {
    for (YoutubeChannel ytChannel : collection.myChannels) {
        COUT << ytChannel << endl;
    };
    return COUT;
}

int main() {
    YoutubeChannel yt1 = YoutubeChannel("Murga", 150000);
    YoutubeChannel yt2 = YoutubeChannel("Amar", 1300);
    MyCollection myCollection;
    myCollection += yt1;
    myCollection += yt2;
    cout << myCollection;
    myCollection -= yt2;
    cout << myCollection;
    // cout << yt1;
    // operator<<(cout, yt1);

    cin.get();
}