#include <iostream>
#include <list>
using namespace std;

class YoutubeChannel {
  private:
    string Name;
    int SubscribersCount;
    list<string> PublishedVideoTitles;

  protected:
    string OwnerName;

  public:
    YoutubeChannel(string name, string ownerName) {
      Name = name;
      OwnerName = ownerName;
      SubscribersCount = 0;
      PublishedVideoTitles = {};
    }

    void GetInfo() {
      cout << "This channels name is: " << Name << " The owner's name is: " << OwnerName << " They have: " << SubscribersCount << " Subscribers and these are the videos that they published: ";

      for (string videoTitle : PublishedVideoTitles) {
        cout << videoTitle << " ";
      }
    }

    void Subscribe() {
      SubscribersCount++;
    }
    
    void Unsubscribe() {
      if (SubscribersCount > 0) 
        SubscribersCount--;
    }

    void PublishVideo(string videoTitle) {
      PublishedVideoTitles.push_back(videoTitle);
    }

};

class CookingYoutubeChannel:public YoutubeChannel {
  public:
    CookingYoutubeChannel(string name, string ownerName):YoutubeChannel(name, ownerName) {

    };

    void Practice() {
    cout << OwnerName << " is practicing cooking, dancing, having fun..." << endl;
  }
};

int main()
{
// YoutubeChannel ytChannel("MurgaYT", "Murga");

// ytChannel.Subscribe();
// ytChannel.Subscribe();
// ytChannel.Subscribe();
// ytChannel.Subscribe();
// ytChannel.Unsubscribe();

// ytChannel.PublishVideo("Javascript Legend!");

// ytChannel.GetInfo();

// YoutubeChannel ytChannel2("AmarYT", "Amar");
// ytChannel2.GetInfo();

CookingYoutubeChannel cookingChannel("Kuhar","Murga");
cookingChannel.PublishVideo("Pravim tortu.");
cookingChannel.Subscribe();
cookingChannel.Subscribe();
cookingChannel.Practice();
// cookingChannel.GetInfo();

YoutubeChannel youtubeChannel("Murga","Amar");
// youtubeChannel.Practice(); <-- error!

  system("pause>0");
};