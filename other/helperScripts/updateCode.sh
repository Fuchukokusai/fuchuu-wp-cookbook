#!/usr/bin/env bash

help() {
    echo "用法: ./updateCode.sh [选项] [updateType]"
    echo ""
    echo "这个脚本用于更新WordPress主题和插件代码，同时支持测试环境和生产环境。"
    echo ""
    echo "选项:"
    echo "  -h, --help     显示此帮助信息"
    echo "  -t, --test     仅更新测试环境"
    echo "  -p, --prod     仅更新生产环境"
    echo ""
    echo "updateType参数:"
    echo "  1              更新WordPress主题代码"
    echo "  2              更新wp-link-gallery插件代码"
    echo "  3              更新wp-protected-pdf-download插件代码"
    echo "  -1             更新所有代码"
    echo "  多个值用逗号分隔  例如: 1,2 表示更新WordPress主题和wp-link-gallery插件代码"
    echo ""
    echo "示例:"
    echo "  ./updateCode.sh -t 1     # 仅更新测试环境的WordPress主题代码"
    echo "  ./updateCode.sh -p 2     # 仅更新生产环境的wp-link-gallery插件代码"
    echo "  ./updateCode.sh -t 1,2      # 更新 test 环境的WordPress主题和wp-link-gallery插件代码"
    echo ""
    echo "文件同步示例:"
    echo "  rsync -Pcauv ~/web/fuchukokusai.com/wp-content/uploads/2025/04 ~/web/test/wp-content/uploads/2025/04"
}

# 如果没有参数，显示帮助信息并退出
if [ $# -eq 0 ]; then
    help
    exit 0
fi

# 如果有-h或--help参数，显示帮助信息并退出
if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
    help
    exit 0
fi

# 设置默认值
ENV="test"
UPDATE_TYPE="1"

# 解析参数
while [ "$#" -gt 0 ]; do
    case "$1" in
        -t|--test)
            ENV="test"
            shift
            ;;
        -p|--prod)
            ENV="prod"
            shift
            ;;
        -a|--all)
            ENV="all"
            shift
            ;;
        *)
            UPDATE_TYPE="$1"
            shift
            ;;
    esac
done

# 更新指定的代码
update_code() {
    local env=$1
    local type=$2
    local base_path

    if [ "$env" = "test" ]; then
        base_path="~/web/test/wp-content"
    else
        base_path="~/web/fuchukokusai.com/wp-content"
    fi

    case "$type" in
        1)
            cd "$base_path/themes/devotion-pro/" && git pull
            ;;
        2)
            cd "$base_path/plugins/wp-link-gallery/" && git pull
            ;;
        3)
            cd "$base_path/plugins/wp-protected-pdf-download/" && git pull
            ;;
    esac
}

# 处理更新类型
process_update_type() {
    local env=$1
    local types=$2

    # 如果是-1，更新所有代码
    if [ "$types" = "-1" ]; then
        update_code "$env" 1
        update_code "$env" 2
        update_code "$env" 3
        return
    fi

    # 处理逗号分隔的类型
    IFS=',' read -ra TYPE_ARRAY <<< "$types"
    for type in "${TYPE_ARRAY[@]}"; do
        update_code "$env" "$type"
    done
}

# 根据环境执行更新
if [ "$ENV" = "test" ]; then
    process_update_type "test" "$UPDATE_TYPE"
fi

if [ "$ENV" = "prod" ]; then
    process_update_type "prod" "$UPDATE_TYPE"
fi

if [ "$ENV" = "all" ]; then
    process_update_type "test" "$UPDATE_TYPE"
    process_update_type "prod" "$UPDATE_TYPE"
fi



