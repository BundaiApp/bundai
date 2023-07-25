#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#include "ViewController.h"
@implementation AppDelegate

- (void)applicationDidFinishLaunching:(NSNotification *)notification
{
  self.moduleName = @"bundai";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
  NSStatusBar *statusBar = [NSStatusBar systemStatusBar];
  [self setStatusItem:[statusBar statusItemWithLength:NSVariableStatusItemLength]];

  NSButton *button = [_statusItem button];
  [self setJapaneseTextForButton:button];

  [button setTarget:self];
  [button setAction:@selector(showPopover:)];
  
  return [super applicationDidFinishLaunching:notification];
  
}

// 3
- (void)showPopover:(id)sender {
  NSPopover *popover = [[NSPopover alloc] init];
  [popover setBehavior:NSPopoverBehaviorTransient];


  NSViewController *popoverViewController = [ViewController new];
  [popover setContentViewController:popoverViewController];


  NSButton *statusButton = [_statusItem button];
  [popover showRelativeToRect:[statusButton bounds] ofView:statusButton preferredEdge:NSMinYEdge];
}

- (void)setJapaneseTextForButton:(NSButton *)button {
  NSString *japaneseText = @"文台"; // Replace this string with your desired Japanese text

  NSDictionary *textAttributes = @{
    NSFontAttributeName: [NSFont systemFontOfSize:14.0], // Adjust the font size as needed
    NSForegroundColorAttributeName: [NSColor whiteColor] // Adjust the text color as needed
  };

  NSAttributedString *attributedString = [[NSAttributedString alloc] initWithString:japaneseText attributes:textAttributes];
  NSSize textSize = [attributedString size];

  NSImage *image = [[NSImage alloc] initWithSize:textSize];
  [image lockFocus];
  [attributedString drawAtPoint:NSZeroPoint];
  [image unlockFocus];

  [button setImage:image];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).
/// @return: `true` if the `concurrentRoot` feature is enabled. Otherwise, it returns `false`.
- (BOOL)concurrentRootEnabled
{
#ifdef RN_FABRIC_ENABLED
  return true;
#else
  return false;
#endif
}

@end
