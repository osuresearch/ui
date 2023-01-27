import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Stack } from '../Stack';
import { Text } from '../Text';
import { ConfirmButton, ConfirmButtonProps } from './ConfirmButton';

export default RUIComponentMeta<ConfirmButtonProps>(
  'Dialogs',
  ConfirmButton
).withStyleSystemProps();

export const Overview = RUIComponentStory<ConfirmButtonProps>(
  (args) => <ConfirmButton {...args}>Delete folder</ConfirmButton>,
  {
    title: 'Delete folder',
    dialogContentSlot:
      'Are you sure you want to delete "My Documents"? All contents will be permanently destroyed.',
    primaryActionSlot: 'Delete'
  }
);

export const SecondaryAction = RUIComponentStory<ConfirmButtonProps>(
  (args) => <ConfirmButton {...args}>Share</ConfirmButton>,
  {
    title: 'Share project',
    dialogContentSlot: 'Do you want to create a shared link that is publicly accessible?',
    primaryActionSlot: 'Yes, share publicly',
    secondaryActionSlot: 'No, share privately',
    primaryActionAccent: 'teal'
  }
).withDescription(`
  A secondary action can be added to confirmation dialogs to provide
  common alternatives to the action.

  For more than two actions, use a form.
`);

const TOS = () => (
  <Stack style={{ maxHeight: '60vh', overflowY: 'scroll' }} miw="60vw">
    <Text fw="bold">1. Acceptance The Use Of Lorem Ipsum Terms and Conditions</Text>
    <Text>
      Your access to and use of Lorem Ipsum (the app) is subject exclusively to these Terms and
      Conditions. You will not use the app for any purpose that is unlawful or prohibited by these
      Terms and Conditions. By using the app you are fully accepting the terms, conditions and
      disclaimers contained in this notice. If you do not accept these Terms and Conditions you must
      immediately stop using the app.
    </Text>
    <Text fw="bold">2. CREDIT CARD DETAILS</Text>
    <Text>
      All Lorem Ipsum purchases are managed by the individual App Stores (Apple, Google Windows) and
      Lorem Ipsum will never store your credit card information or make it available to any third
      parties. Any purchasing information provided will be provided directly from you to the
      respective App Store and you will be subject to their credit card policies.
    </Text>
    <Text fw="bold">3. LEGAL ADVICE</Text>
    <Text>
      The contents of Lorem Ipsum app do not constitute advice and should not be relied upon in
      making or refraining from making, any decision. All material contained on Lorem Ipsum is
      provided without any or warranty of any kind. You use the material on Lorem Ipsum at your own
      discretion
    </Text>
    <Text fw="bold">4. CHANGE OF USE</Text>
    <Text>Lorem Ipsum reserves the right to:</Text>
    <Text ml="md">
      4.1 change or remove (temporarily or permanently) the app or any part of it without notice and
      you confirm that Lorem Ipsum shall not be liable to you for any such change or removal and.
      <br />
      4.2 change these Terms and Conditions at any time, and your continued use of the app following
      any changes shall be deemed to be your acceptance of such change.
    </Text>
    <Text fw="bold">5. Links to Third Party apps and websites</Text>
    <Text>
      Lorem Ipsum app may include links to third party apps and websites that are controlled and
      maintained by others. Any link to other apps and websites is not an endorsement of such and
      you acknowledge and agree that we are not responsible for the content or availability of any
      such apps and websites.
    </Text>
    <Text fw="bold">6. COPYRIGHT</Text>
    <Text ml="md">
      6.1 All copyright, trade marks and all other intellectual property rights in the app and its
      content (including without limitation the app design, text, graphics and all software and
      source codes connected with the app) are owned by or licensed to Lorem Ipsum or otherwise used
      by Lorem Ipsum as permitted by law.
      <br />
      6.2 In accessing the app you agree that you will access the content solely for your personal,
      non-commercial use. None of the content may be downloaded, copied, reproduced, transmitted,
      stored, sold or distributed without the prior written consent of the copyright holder. This
      excludes the downloading, copying and/or printing of pages of the app for personal,
      non-commercial home use only.
    </Text>
    <Text fw="bold">7. LINKS TO AND FROM OTHER apps and websites</Text>
    <Text ml="md">
      7.1 Throughout this app you may find links to third party apps. The provision of a link to
      such an app does not mean that we endorse that app. If you visit any app via a link in this
      app you do so at your own risk.
      <br />
      7.2 Any party wishing to link to this app is entitled to do so provided that the conditions
      below are observed:
      <Text as="div" ml="md">
        (a) You do not seek to imply that we are endorsing the services or products of another party
        unless this has been agreed with us in writing;
        <br />
        (b) You do not misrepresent your relationship with this app; and
        <br />
        (c) The app from which you link to this app does not contain offensive or otherwise
        controversial content or, content that infringes any intellectual property rights or other
        rights of a third party.
      </Text>
      7.3 By linking to this app in breach of our terms, you shall indemnify us for any loss or
      damage suffered to this app as a result of such linking.
    </Text>

    <Text fw="bold">8. DISCLAIMERS AND LIMITATION OF LIABILITY</Text>
    <Text>
      8.1 The app is provided on an AS IS and AS AVAILABLE basis without any representation or
      endorsement made and without warranty of any kind whether express or implied, including but
      not limited to the implied warranties of satisfactory quality, fitness for a particular
      purpose, non-infringement, compatibility, security and accuracy.
      <br />
      8.2 To the extent permitted by law, Lorem Ipsum will not be liable for any indirect or
      consequential loss or damage whatever (including without limitation loss of business,
      opportunity, data, profits) arising out of or in connection with the use of the app.
      <br />
      8.3 Lorem Ipsum makes no warranty that the functionality of the app will be uninterrupted or
      error free, that defects will be corrected or that the app or the server that makes it
      available are free of viruses or anything else which may be harmful or destructive.
      <br />
      8.4 Nothing in these Terms and Conditions shall be construed so as to exclude or limit the
      liability of Lorem Ipsum for death or personal injury as a result of the negligence of Lorem
      Ipsum or that of its employees or agents.
    </Text>
    <Text fw="bold">9. INDEMNITY</Text>
    <Text>
      You agree to indemnify and hold Lorem Ipsum and its employees and agents harmless from and
      against all liabilities, legal fees, damages, losses, costs and other expenses in relation to
      any claims or actions brought against Lorem Ipsum arising out of any breach by you of these
      Terms and Conditions or other liabilities arising out of your use of this app.
    </Text>
    <Text fw="bold">10. SEVERANCE</Text>
    <Text>
      If any of these Terms and Conditions should be determined to be invalid, illegal or
      unenforceable for any reason by any court of competent jurisdiction then such Term or
      Condition shall be severed and the remaining Terms and Conditions shall survive and remain in
      full force and effect and continue to be binding and enforceable.
    </Text>
    <Text fw="bold">11. WAIVER</Text>
    <Text>
      If you breach these Conditions of Use and we take no action, we will still be entitled to use
      our rights and remedies in any other situation where you breach these Conditions of Use.
    </Text>
    <Text fw="bold">12. GOVERNING LAW</Text>
    <Text>
      These Terms and Conditions shall be governed by and construed in accordance with the law of
      and you hereby submit to the exclusive jurisdiction of the courts.
    </Text>
  </Stack>
);

export const LargeContent = RUIComponentStory<ConfirmButtonProps>(
  (args) => <ConfirmButton {...args}>Review the Terms and Conditions</ConfirmButton>,
  {
    title: 'Terms and Conditions',
    dialogContentSlot: <TOS />,
    primaryActionSlot: 'Agree',
    cancelSlot: 'Disagree'
  }
);
