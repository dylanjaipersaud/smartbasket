#include <SPI.h>
#include <MFRC522.h>
#define SS_PIN 10
#define RST_PIN 9


MFRC522 rfid(SS_PIN, RST_PIN); // Instance of the class

MFRC522::MIFARE_Key key;


//int code[] = {32,154,149,117}; //This is the stored UID (Unlock Card)

int code1[] = {3,57,67,47};
int code2[] = {226, 16, 66, 25};

int dataMatch[][4] = {{03,57,67,47}, {226, 16, 66, 25}};

int codeRead = 0;

String uidString;

void setup() {

  Serial.begin(9600);

  SPI.begin(); // Init SPI bus

  rfid.PCD_Init(); // Init MFRC522

  Serial.println(F("Arduino RFID tutorial"));

}



void loop() {

  if(rfid.PICC_IsNewCardPresent())
  {
    readRFID();
  }
  delay(100);
}

void readRFID(){
  rfid.PICC_ReadCardSerial();
  Serial.print(F("\nPICC type: "));

  MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);

  Serial.println(rfid.PICC_GetTypeName(piccType));



  // Check is the PICC of Classic MIFARE type

  if (piccType != MFRC522::PICC_TYPE_MIFARE_MINI && piccType != MFRC522::PICC_TYPE_MIFARE_1K && piccType != MFRC522::PICC_TYPE_MIFARE_4K) {

    Serial.println(F("Your tag is not of type MIFARE Classic."));

    return;

  }

    Serial.println("Scanned PICC's UID:");

    printDec(rfid.uid.uidByte, rfid.uid.size);

    uidString = String(rfid.uid.uidByte[0])+" "+String(rfid.uid.uidByte[1])+" "+String(rfid.uid.uidByte[2])+ " "+String(rfid.uid.uidByte[3]);

    int i = 0;

    boolean match = true;
 

    while(i<rfid.uid.size)
    {
      if(!(int(rfid.uid.uidByte[i]) == int(code1[i])))
      {
         match = false;
      }
      i++;
    }

    if(match)
    {

      Serial.println("\n*** Verified ID ***");

      boolean product1 = true;
      boolean product2 = true;
      i = 0;
      while(i<rfid.uid.size)
    {
      if(!(int(rfid.uid.uidByte[i]) == int(dataMatch[0][i])))
      {
         product1 = false;
      }
      i++;
    }

    i = 0;
     while(i<rfid.uid.size)
    {
      if(!(int(rfid.uid.uidByte[i]) == int(dataMatch[1][i])))
      {
         product2 = false;
      }
      i++;
    }

    if(product1)
    {
      Serial.println("\n*** Found the card ***");
    }
    else if(product2)
    {
      Serial.println("\n*** Found the key ***");
    }
    }
    
    else
    {

      Serial.println("\nUnknown Card");

    }

   Serial.println("============================");

    // Halt PICC

  rfid.PICC_HaltA();

  // Stop encryption on PCD

  rfid.PCD_StopCrypto1();

}



void printDec(byte *buffer, byte bufferSize) {

  for (byte i = 0; i < bufferSize; i++) {

    Serial.print(buffer[i] < 0x10 ? " 0" : " ");

    Serial.print(buffer[i], DEC);

  }

}