import { Link } from 'react-router-dom';
import { LucideMenu, LucideNewspaper, LucidePlusSquare, LucideShieldQuestion } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logo from '@/assets/logo.webp';
import GlobalSearch from '@/components/shared/GlobalSearch/GlobalSearch';
import Theme from '@/components/shared/Navbar/Theme';
import UserMenu from './UserMenu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  LucideFileQuestion,
  LucideHome,
  LucideTags,
  LucideUserCircle,
  LucideUserX2,
  LucideUsers2,
} from 'lucide-react';

const isActive = (route: string): boolean => {
  return location.pathname === route;
};

const Navbar = () => {
  return (
    <nav className="fixed p-5 z-50 flex w-full items-center justify-between gap-3 bg-zinc-50 shadow-sm sm:px-12 dark:bg-zinc-900 dark:shadow-black">
      <Link to="/" className="flex items-center gap-1">
        <img src={logo} alt="PlusDev.NET" className="w-9" />

        <h3 className="h3-bold ml-1 hidden font-space-grotesk-bold text-slate-900 sm:block dark:text-slate-100">
          PlusDev<span className="text-red-500">.NET</span>
        </h3>
      </Link>
      <GlobalSearch />
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="p-1">
            <LucidePlusSquare className="h-6 w-6 text-red-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2 mt-4 bg-zinc-50 dark:bg-slate-800">
            <DropdownMenuItem>
              <Link
                to="/create-post"
                className="flex gap-3 p-4 hover:text-red-500 dark:text-zinc-100 dark:hover:text-red-500">
                <LucideNewspaper className="w-5 h-5" /> Create a Post
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                to="/ask-question"
                className="flex gap-3 p-4 hover:text-red-500 dark:text-zinc-100 dark:hover:text-red-500">
                <LucideShieldQuestion className="w-5 h-5" /> Ask a Question
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Theme type="dropdown" />

        <UserMenu />
        <Sheet key="left">
          <SheetTrigger asChild>
            <LucideMenu variant="outline" className="hidden h-6 w-6 text-red-500 max-sm:inline" />
          </SheetTrigger>
          <SheetContent side="left">
            <div className=" overflow-y-auto h-full w-full">
              <Link to="/" className="flex items-center gap-1 mb-2">
                <img src={logo} alt="PlusDev.NET" className="w-9" />

                <h3 className="h3-bold ml-1  font-space-grotesk-bold text-slate-900 sm:block dark:text-slate-100">
                  PlusDev<span className="text-red-500">.NET</span>
                </h3>
              </Link>
              <section
                className=" w-full  flex h-screen flex-col justify-between
      border-zinc-200 bg-zinc-50 p-6 pt-10  dark:border-zinc-900 dark:bg-zinc-900">
                <div className="flex flex-1 flex-col gap-6">
                  <Link
                    to="/"
                    className={`flex items-center justify-start gap-4 p-4 rounded-lg ${
                      isActive('/')
                        ? 'primary-gradient base-bold text-zinc-50'
                        : 'base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}>
                    <LucideHome className="h-5 w-5" />
                    <SheetTrigger >
                      <span>Home</span>
                    </SheetTrigger>
                  </Link>

                  <Link
                    to="/posts"
                    className={`flex items-center justify-start gap-4 p-4 rounded-lg ${
                      isActive('/posts')
                        ? 'primary-gradient base-bold text-zinc-50'
                        : 'base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}>
                    <LucideNewspaper className="h-5 w-5" />
                    <SheetTrigger >
                      <span>Posts</span>
                    </SheetTrigger>
                  </Link>

                  <Link
                    to="/questions"
                    className={`flex items-center justify-start gap-4 p-4 rounded-lg ${
                      isActive('/questions')
                        ? 'primary-gradient base-bold text-zinc-50'
                        : 'base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}>
                    <LucideFileQuestion className="h-5 w-5" />
                    <SheetTrigger >
                      <span>Questions</span>
                    </SheetTrigger>
                  </Link>

                  <Link
                    to="/community"
                    className={`flex items-center justify-start gap-4 p-4 rounded-lg ${
                      isActive('/community')
                        ? 'primary-gradient base-bold text-zinc-50'
                        : 'base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}>
                    <LucideUsers2 className="h-5 w-5" />
                    <SheetTrigger >
                      <span>Community</span>
                    </SheetTrigger>
                  </Link>

                  <Link
                    to="/tags"
                    className={`flex items-center justify-start gap-4 p-4 rounded-lg ${
                      isActive('/tags')
                        ? 'primary-gradient base-bold text-zinc-50'
                        : 'base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}>
                    <LucideTags className="h-5 w-5" />
                    <SheetTrigger >
                      <span>Tags</span>
                    </SheetTrigger>
                  </Link>
                </div>

                <div className="mt-5 flex flex-col gap-5">
                  <Link to="/sign-in">
                    <Button className="body-semibold btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 text-zinc-50">
                      {/* <LucideUserCircle className="h-5 w-5 lg:hidden" /> */}
                      <SheetTrigger >
                        <span>Sign In </span>
                      </SheetTrigger>
                    </Button>
                  </Link>

                  <Link to="/sign-up">
                    <Button className="body-semibold btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 text-zinc-50">
                      {/* <LucideUserX2 className="h-5 w-5 lg:hidden" /> */}
                      <SheetTrigger >
                        <span>Sign Up</span>
                      </SheetTrigger>
                    </Button>
                  </Link>
                </div>
              </section>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
