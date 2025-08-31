export function getOSName(value: string): string {
     let os: string = "";

     switch (true) {
          case value.includes("Windows NT"):
               os = "Windows";
               break;
          case value.includes("Mac OS X"):
               os = "MacOS";
               break;
          case value.includes("Linux"):
               os = "Linux";
               break;
          case value.includes("Android"):
               os = "Android";
               break;
          case value.includes("iPhone") || value.includes("iPad"):
               os = "iOS";
               break;
     }

     return os;
}
