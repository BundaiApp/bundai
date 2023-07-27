#import "ViewController.h"
#import "AppDelegate.h"

#import <React/RCTRootView.h>

@implementation ViewController

// 4
- (void)loadView {
  [self setView:[NSView new]];
  [[self view] setFrame:NSMakeRect(0, 0, 600, 600)];
}

- (void)viewDidLoad {
  [super viewDidLoad];

  RCTBridge *bridge = [((AppDelegate *)[NSApp delegate])bridge];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"bundai" initialProperties:nil];

  NSView *view = [self view];

  [view addSubview:rootView];
  [rootView setBackgroundColor:[NSColor windowBackgroundColor]];
  [rootView setFrame:[view bounds]];
  //[rootView setAutoresizingMask:(NSViewMinXMargin | NSViewMaxXMargin | NSViewMinYMargin | NSViewMaxYMargin )];
  
  //set min size Replace the values with your desired minimum size (e.g., 400x400)
  NSWindow *window = self.view.window;
  [window setMinSize:NSMakeSize(400, 400)];
}

@end
