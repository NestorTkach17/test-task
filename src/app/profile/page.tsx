import HeaderTitle from "@/src/components/ui/HeaderTitle";
import NavigationWrapper from "@/src/components/ui/layout/NavigationWrapper";
import ProfileSettings from "@/src/components/ui/profileSettings/ProfileSettings";

export default function ProfilePage() {
  return (
    <NavigationWrapper>
      <HeaderTitle title="Minu profiil" />
      <ProfileSettings />
    </NavigationWrapper>
  );
}
