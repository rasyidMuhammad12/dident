import Time "mo:base/Time";
import Int "mo:base/Int";

module {
  public type Verification = {
    verified : Bool;
    timestamp : Nat;
    name : Text;
    nik : Text;
  };

  public func createVerification(name: Text, nik: Text) : Verification {
    {
      verified = true;
      timestamp = Int.abs(Time.now());
      name = name;
      nik = nik;
    }
  }
}
