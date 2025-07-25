import Identity "identity";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";

actor Main {

  let users = HashMap.HashMap<Text, Identity.Verification>(10, Text.equal, Text.hash);

public func verifyUserWithData(hash: Text, name: Text, nik: Text) : async () {
  let data = Identity.createVerification(name, nik);
  users.put(hash, data);
};

  public query func getStatus(hash : Text) : async ?Identity.Verification {
    return users.get(hash);
  };
}
