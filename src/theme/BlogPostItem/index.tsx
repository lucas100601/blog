import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import { useColorMode } from "@docusaurus/theme-common";
import Giscus from "@giscus/react";
import type { Props } from "@theme/BlogPostItem";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import clsx from "clsx";
import { type ReactNode } from "react";

// apply a bottom margin in list view
function useContainerClassName() {
    const { isBlogPostPage } = useBlogPost();
    return !isBlogPostPage ? "margin-bottom--xl" : undefined;
}

export default function BlogPostItem({
    children,
    className,
}: Props): ReactNode {
    const { frontMatter, metadata, isBlogPostPage } = useBlogPost();
    const { colorMode } = useColorMode();

    const containerClassName = useContainerClassName();
    return (
        <BlogPostItemContainer className={clsx(containerClassName, className)}>
            <BlogPostItemHeader />
            <BlogPostItemContent>{children}</BlogPostItemContent>
            <BlogPostItemFooter />

            {isBlogPostPage && (
                <div style={{ marginTop: "50px" }}>
                    <Giscus
                        repo="lucas100601/blog"
                        repoId="R_kgDOOnO5ZQ"
                        category="Announcements"
                        categoryId="DIC_kwDOOnO5Zc4CqfLK"
                        mapping="pathname"
                        term={metadata.permalink}
                        reactionsEnabled="1"
                        emitMetadata="0"
                        inputPosition="top"
                        theme={colorMode}
                        lang="zh-TW"
                        loading="lazy"
                    />
                </div>
            )}
        </BlogPostItemContainer>
    );
}
