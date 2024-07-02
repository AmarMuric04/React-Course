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
    int ContentQuality;

  public:
    YoutubeChannel(string name, string ownerName) {
      Name = name;
      OwnerName = ownerName;
      SubscribersCount = 0;
      PublishedVideoTitles = {};
      ContentQuality = 0;
    }

    void GetInfo() {
      cout << "This channels name is: " << Name << " The owner's name is: " << OwnerName << " They have: " << SubscribersCount << " Subscribers, Content Quality rate of " << ContentQuality << " and these are the videos that they published: ";

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

    void CheckStatistics() {
      if (ContentQuality < 5)
        cout << Name << " Does not have a good quality rating..." << endl;
      else 
        cout << Name << " Has great quality!" << endl;
    } 
};

class CookingYoutubeChannel:public YoutubeChannel {
  public:
    CookingYoutubeChannel(string name, string ownerName):YoutubeChannel(name, ownerName) {};

    void Practice() {
      cout << OwnerName << " is practicing cooking, dancing, having fun..." << endl;
      ContentQuality++;
  }
};

class SingingYoutubeChannel:public YoutubeChannel {
  public: 
    SingingYoutubeChannel(string name, string ownerName):YoutubeChannel(name, ownerName){}

    void Practice() {
      cout << OwnerName << " is practicing singing, dancing, having a blast..." << endl;
      ContentQuality++;
    }; 
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

CookingYoutubeChannel cookingChannel("Kuhar", "Murga");
cookingChannel.PublishVideo("Pravim tortu.");
cookingChannel.Subscribe();
cookingChannel.Subscribe();
cookingChannel.Practice();
// cookingChannel.GetInfo();

YoutubeChannel youtubeChannel("Murga", "Amar");
// youtubeChannel.Practice(); <-- error!

SingingYoutubeChannel murgaSings("MurgaSings", "Murga");

// cookingChannel.Practice();
murgaSings.Practice();
murgaSings.Practice();
murgaSings.Practice();
murgaSings.Practice();
murgaSings.Practice();

YoutubeChannel *yt1 = &cookingChannel;
YoutubeChannel *yt2 = &murgaSings;

yt2->CheckStatistics();
murgaSings.CheckStatistics();

system("pause>0");
};