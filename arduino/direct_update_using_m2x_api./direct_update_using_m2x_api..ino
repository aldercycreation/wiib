#include <ESP8266WiFi.h>

#define ESP8266_PLATFORM

#include "DHT.h"

#define DHTPIN D2  
#define DHTTYPE DHT11  

#include "M2XStreamClient.h"

char ssid[] = "Mydd2016"; //  your network SSID (name)
char pass[] = "mydd@2016";    // your network password (use for WPA, or use as key for WEP)
int keyIndex = 0;            // your network key Index number (needed only for WEP)

int status = WL_IDLE_STATUS;

char deviceId[] = "767f9ecf3fc3c5b640437eba4e77ee53"; // Device you want to push to
//char streamName[] = "temp"; // Stream you want to push to
char m2xKey[] = "a15d80da3aa26ea62c45dcce09e0d2c9"; // Your M2X access key
/*
char deviceId[] = "<device id>"; // Device you want to push to
char m2xKey[] = "<M2X access key>"; // Your M2X access key
*/
const char *streamNames[] = { "temp", "humid", "distance" };
int counts[] = { 1, 1, 1};
const char *ats[] = { "2013-09-09T19:15:00Z",
                      "2013-09-09T19:15:10Z",
                      "2013-09-09T19:15:20Z"};


char timestamp[25];

WiFiClient client;
M2XStreamClient m2xClient(&client, m2xKey);
TimeService timeService(&m2xClient);

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
dht.begin();
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network. Change this line if using open or WEP network:
    status = WiFi.begin(ssid, pass);

 delay(10000);
 
  if (!m2x_status_is_success(timeService.init())) {
    Serial.println("Cannot initialize time service!");
    while(1) {}
  }
    // wait 10 seconds for connection:
    delay(5000);
  }
  Serial.println("Connected to wifi");
  printWifiStatus();
}

void loop() {

    float h = dht.readHumidity();
  // Read temperature as Celsius (the default)
  float t = dht.readTemperature();

 int d = analogRead(A0);
   d = d / 10;
  double values[] = { t, h, d };

    int length = 25;
  timeService.getTimestamp(timestamp, &length);

char *timestamps[2];
timestamps[0] = timestamp;
timestamps[1] = timestamp;
timestamps[2] = timestamp;

 Serial.println(timestamp);
  Serial.println(t);
   Serial.println(h);
    Serial.println(d);
 

  int response = m2xClient.postDeviceUpdates(deviceId, 3, streamNames,
                                             counts, (const char **) timestamps, values);
  Serial.print("M2X client response code: ");
  Serial.println(response);

  if (response == -1) while(1) ;

  delay(5000);
}


void printWifiStatus() {
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());


  // print your WiFi shield's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
}

